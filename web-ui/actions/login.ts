'use server'

import { LoginSchema } from '@/schemas'
import z from 'zod'

export const login = async (values: z.infer<typeof LoginSchema>) => {
	// Simulating a delay, just to show the loading state in the LoginForm.
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const validatedFields = LoginSchema.safeParse(values)

	if (!validatedFields.success) {
		return {
			error: 'Invalid credentials',
		}
	}

	return {
		success: 'Successfully logged in',
	}
}
