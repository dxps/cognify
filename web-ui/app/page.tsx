import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center bg-slate-200 dark:bg-slate-800">
			<div className="space-y-6">
				<h1
					className={cn(
						'text-4xl font-semibold text-slate-800  dark:text-slate-100 drop-shadow-md',
						font.className
					)}
				>
					Welcome!
				</h1>
				<div className="flex justify-center">
					<LoginButton>
						<Button
							variant="secondary"
							size="lg"
							className="cursor-pointer drop-shadow-sm bg-white dark:bg-slate-600"
						>
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	)
}
