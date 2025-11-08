import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { APITester } from '@/components/APITester'
import '@/index.css'

export default function ApiTesterView() {
	return (
		<div className="mx-auto p-8 text-center min-w-[500px] max-w-[600px] z-10">
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
