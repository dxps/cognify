import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './ui/sheet'
import { categories } from './navbar'
import { Link } from 'react-router-dom'

export default function MobileNav() {
	return (
		<div>
			<Sheet>
				<SheetTrigger asChild className="md:hidden">
					<Button variant="ghost" size="icon">
						<Menu className="h5 w-5" />
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="max-w-48">
					<SheetHeader>
						<SheetTitle>Menu</SheetTitle>
					</SheetHeader>
					<nav className="flex flex-col gap-4 px-4">
						<SheetClose asChild>
							<Link to="/">Home</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link to="/about">About</Link>
						</SheetClose>
						<div>
							<h3 className="text-xs font-medium my-2 text-muted-foreground">
								Features
							</h3>
							{categories.slice(2).map((category) => (
								<SheetClose key={category.id} asChild>
									<Link
										to={category.path}
										className="block py-2 text-sm font-medium"
									>
										{category.name}
									</Link>
								</SheetClose>
							))}
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</div>
	)
}
