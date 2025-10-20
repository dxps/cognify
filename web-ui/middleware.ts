import { auth } from '@/auth'

export default auth((req) => {
	// req.auth
})

export const config = {
	// (i) These paths will invoke the middleware (the `auth` function above).
	matcher: [
		// Skip the following:
		// 1) /.well-known (and paths)
		// 2) Next.js internals and all static files, unless found in search params.
		'/((?!\\.well-known(?:/|$)|_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

		// Always run for API routes
		'/(api|trpc)(.*)',
	],
}
