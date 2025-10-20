import { auth } from '@/auth'

const SettingsPage = async () => {
	// const session = await auth()
	const session = (await auth.$context).session
	return <div>{JSON.stringify(session)}</div>
}

export default SettingsPage
