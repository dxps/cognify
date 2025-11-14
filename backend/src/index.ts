import { Elysia, type Context } from 'elysia'
import { cors } from '@elysiajs/cors'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sql'
import { eq } from 'drizzle-orm'
import { users } from './db/schema'
import { auth } from './auth'

const db = drizzle({
	connection: {
		url: process.env.DATABASE_URL!,
		// Max number of connections.
		max: 2,
		// Maximum number of seconds to keep a connection alive.
		maxLifetime: 180,
	},
})

main()

async function main() {
	// await dbInitialCheck()
	startServer()
}

async function dbInitialCheck() {
	const user: typeof users.$inferInsert = {
		id: '1',
		name: 'John',
		email: 'john@doe.com',
	}
	await db.insert(users).values(user)
	console.log('🧪 New user created!')

	const usersRS = await db.select().from(users)
	console.log('🧪 Getting all users from the database: ', usersRS)

	await db
		.update(users)
		.set({
			emailVerified: true,
		})
		.where(eq(users.email, user.email))
	console.log('🧪 User info updated!')

	await db.delete(users).where(eq(users.email, user.email))
	console.log('🧪 User deleted!')
}

function startServer() {
	const betterAuthAPI = (context: Context) => {
		const BETTER_AUTH_ACCEPT_METHODS = ['POST', 'GET']
		// validate request method
		if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
			return auth.handler(context.request)
		} else {
			context.status(405)
		}
	}
	const app = new Elysia()
		.use(
			cors({
				origin: 'http://localhost:3012',
				allowedHeaders: ['Content-Type', 'Authorization'],
				methods: ['POST', 'GET', 'OPTIONS'],
				exposeHeaders: ['Content-Length'],
				maxAge: 600,
				credentials: true,
			})
		)
		.all('/api/auth/*', betterAuthAPI)
		.macro({
			auth: {
				async resolve({ status, request: { headers } }) {
					const session = await auth.api.getSession({ headers })
					if (!session) return status(401)
					return {
						user: session.user,
						session: session.user,
					}
				},
			},
		})
		.onError(({ code, status, set }) => {
			if (code === 'NOT_FOUND') {
				return { error: 'Route not found' }
			}
		})
		.get('/', () => 'The back-end side of cognify')
		.get('/api/hello', () => {
			return { message: 'Hello from the back-end side' }
		})
		.listen(3011)

	console.log(
		`🦊 The back-end server is running at ${app.server?.hostname}:${app.server?.port}`
	)
}
