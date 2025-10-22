'use client'

import { Card, CardHeader, CardFooter, CardContent } from '@/components/ui/card'
import { Header } from './header'
import Social from './social'
import BackButton from './back-button'

interface CardWrapperProps {
	children: React.ReactNode
	headerLabel: string
	backButtonLabel?: string
	backButtonHref?: string
	showSocial?: boolean
	width?: string
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel = '',
	backButtonHref = '',
	showSocial,
	width = 'w-[400px]',
}: CardWrapperProps) => {
	return (
		<Card className={`${width} shadow-md`}>
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton href={backButtonHref} label={backButtonLabel} />
			</CardFooter>
		</Card>
	)
}
