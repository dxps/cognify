'use client'

import { CardWrapper } from '@/components/auth/card-wrapper'
import { useSession } from '@/lib/auth-client'

const SettingsPage = () => {
	const { data } = useSession()
	return (
		<CardWrapper
			headerLabel="Settings"
			width="sm:w-[600px] md:w-[800px] sm:text-xs text-sm w-full"
		>
			<div className="overflow-x-scroll">
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</div>
		</CardWrapper>
	)
}

export default SettingsPage
