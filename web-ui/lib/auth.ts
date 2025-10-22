import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@/lib/generated/prisma'
import { nextCookies } from 'better-auth/next-js'

const prisma = new PrismaClient()

export const auth = betterAuth({
	advanced: {
		cookiePrefix: 'cognify',
	},

	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),

	emailAndPassword: {
		enabled: true,
		minPasswordLength: 4,
		maxPasswordLength: 64,
	},

	plugins: [nextCookies()],
})
