import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schema'

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
		// debugLogs: true,
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
	user: {
		modelName: 'users',
	},
	account: {
		modelName: 'accounts',
	},
	verification: {
		modelName: 'verifications',
	},
	session: {
		modelName: 'sessions',
	},
	emailVerification: {
		sendOnSignIn: true,
		sendVerificationEmail: async ({ user, url, token }, request) => {
			// TODO: Send email.
		},
	},
	trustedOrigins: ['http://localhost:3012'],
})
