import { drizzle } from 'drizzle-orm/bun-sql'

export const db = drizzle({
	connection: {
		url: process.env.DATABASE_URL!,
		// Max number of connections.
		max: 2,
		// Maximum number of seconds to keep a connection alive.
		maxLifetime: 180,
	},
})
