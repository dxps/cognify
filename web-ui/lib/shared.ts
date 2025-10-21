import { ReadonlyURLSearchParams } from 'next/navigation'

const allowedCallbackSet: ReadonlySet<string> = new Set([
	'/dashboard',
	'/settings',
])

export const getCallbackURL = (
	queryParams: ReadonlyURLSearchParams
): string => {
	const callbackUrl = queryParams.get('callbackUrl')
	if (callbackUrl) {
		if (allowedCallbackSet.has(callbackUrl)) {
			return callbackUrl
		}
		return '/settings'
	}
	return '/settings'
}
