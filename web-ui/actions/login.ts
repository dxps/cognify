'use server'

import { LoginSchema } from '@/schemas'
import z from 'zod'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { getUserByEmail } from '@/data/user'
import { AuthError } from 'next-auth'
import { auth } from '@/auth'

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

	try {
		await auth.api.signInEmail({ body: { email, password } }) // signIn('credentials', {
		// email,
		// password,
		// redirectTo: DEFAULT_LOGIN_REDIRECT,
		// })
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return { error: 'Invalid credentials!' }
				default:
					return { error: 'Something went wrong!' }
			}
		}
	}

	return {
		success: 'Successfully logged in',
	}
}

// function signIn(
// 	arg0: string,
// 	arg1: { email: string; password: string; redirectTo: string }
// ) {
// 	throw new Error('Function not implemented.')
// }
