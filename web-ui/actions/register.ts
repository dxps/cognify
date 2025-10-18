'use server'

import { RegisterSchema } from '@/schemas'
import z from 'zod'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	// Simulating a delay, just to show the loading state in the LoginForm.
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const validatedFields = RegisterSchema.safeParse(values)

	if (!validatedFields.success) {
		return {
			error: 'Invalid credentials',
		}
	}

	return {
		success: 'Successfully registered',
	}
}
