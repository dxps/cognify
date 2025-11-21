import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schema'

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
		// (i) In case it's needed during development.
		// debugLogs: true,
	}),
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
		minPasswordLength: 8,
		maxPasswordLength: 64,
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
			// This would normally send an email.
			// For the current purpose, we'll just log it.
			console.log(
				'>>> [EmailVerification] sendVerificationEmail - user:',
				user,
				'url:',
				url,
				'token:',
				token,
				'request:',
				request
			)
		},
	},
	trustedOrigins: ['http://localhost:3012'],
})
