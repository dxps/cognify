// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'

// export const { auth, handlers, signIn, signOut } = NextAuth({
// providers: [GitHub, Google],
// })

import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { PrismaClient } from '@/lib/generated/prisma'

const prisma = new PrismaClient()
export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: 'postgresql',
	}),
	emailAndPassword: {
		enabled: true,
	},
})
