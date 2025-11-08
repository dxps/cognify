import MobileNav from './mobile-nav'
import { Link } from 'react-router-dom'

export const categories = [
	{ id: 1, name: 'Home', path: '/' },
	{ id: 2, name: 'About', path: '/about' },
	{ id: 3, name: 'API Tester', path: '/api-tester' },
]

export function Navbar() {
	return (
		<div className="container mx-auto flex h-16 items-center justify-between">
			<div>
				<div className="flex items-center gap-6">
					<Link className="text-lg font-bold hidden md:block" to="/">
						cognify
					</Link>
					<nav className="hidden md:flex items-center gap-6">
						{categories.map((category) => (
							<Link
								key={category.id}
								to={category.path}
								className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
							>
								{category.name}
							</Link>
						))}
					</nav>
					<MobileNav />
				</div>
			</div>

			<div className="flex items-center gap-0">
				{/* <ThemeToggle /> */}
			</div>
		</div>
	)
}
