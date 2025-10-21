'use client'

import { useSession } from '@/lib/auth-client'

const SettingsPage = () => {
	const { data } = useSession()
	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}

export default SettingsPage
