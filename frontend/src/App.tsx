import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { APITester } from './APITester'
import './index.css'

export function App() {
	return (
		<div className="container mx-auto p-8 text-center relative z-10">
			<Card>
				<CardHeader className="gap-4">
					<CardTitle className="text-2xl font-medium">
						cognify
					</CardTitle>
					<CardDescription>
						This is an API tester for both front-end and back-end
						APIs.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<APITester />
				</CardContent>
			</Card>
		</div>
	)
}

export default App
