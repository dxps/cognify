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
})
