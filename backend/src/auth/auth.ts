import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '@/db'
import * as schema from '@/db/schema'

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema,
		// TBD: Its usage, after the migration was done.
		//      I had to comment it out, otherwise, I got the error:
		//      "The model "userss" was not found in the schema object"
		// usePlural: true,
	}),
	emailAndPassword: {
		enabled: true,
	},
	user: {
		modelName: 'users',
		fields: {
			emailVerified: 'email_verified',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
		},
	},
})
