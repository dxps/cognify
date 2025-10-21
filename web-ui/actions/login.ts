'use server'

import { LoginSchema } from '@/schemas'
import z from 'zod'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { getUserByEmail } from '@/data/user'
import { signIn } from '@/lib/auth-client'

export const login = async (values: z.infer<typeof LoginSchema>) => {
	// Simulating a delay, just to show the loading state in the LoginForm.
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const validatedFields = LoginSchema.safeParse(values)

	if (!validatedFields.success) {
		return {
			error: 'Invalid credentials',
		}
	}

	const { email, password } = validatedFields.data

	const existingUser = await getUserByEmail(email)

	if (!existingUser || !existingUser.email || !existingUser.password) {
		return { error: 'Email does not exist!' }
	}

	const { data, error } = await signIn.email(
		{
			email,
			password,
			callbackURL: DEFAULT_LOGIN_REDIRECT,
			rememberMe: false,
		},
		{
			onError: (ctx) => {
				console.log('>>> [Login] error:', ctx.error.message)
			},
			onSuccess: async () => {
				console.log('>>> [Login] Successfully signed in.')
			},
		}
	)

	if (error) {
		return {
			error: error.message,
		}
	}

	if (data) {
		return {
			success: true,
			user: data.user,
		}
	}

	return {
		success: 'TBD',
	}
}

// function signIn(
// 	arg0: string,
// 	arg1: { email: string; password: string; redirectTo: string }
// ) {
// 	throw new Error('Function not implemented.')
// }
