import { Elysia } from 'elysia'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/bun-sql'
import { eq } from 'drizzle-orm'
import { usersTable } from './db/schema'

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
	await dbInitialCheck()
	startServer()
}

async function dbInitialCheck() {
	const user: typeof usersTable.$inferInsert = {
		name: 'John',
		age: 30,
		email: 'john@doe.com',
	}
	await db.insert(usersTable).values(user)
	console.log('🧪 New user created!')

	const users = await db.select().from(usersTable)
	console.log('🧪 Getting all users from the database: ', users)

	await db
		.update(usersTable)
		.set({
			age: 31,
		})
		.where(eq(usersTable.email, user.email))
	console.log('🧪 User info updated!')

	await db.delete(usersTable).where(eq(usersTable.email, user.email))
	console.log('🧪 User deleted!')
}

function startServer() {
	const app = new Elysia()
		.get('/', () => 'The back-end side of cognify')
		.listen(3011)

	console.log(
		`🦊 Back-end server is running at ${app.server?.hostname}:${app.server?.port}`
	)
}
