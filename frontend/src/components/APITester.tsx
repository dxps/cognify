import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useRef, type FormEvent } from 'react'
import { env } from '@/lib/env'

export function APITester() {
	const responseInputRef = useRef<HTMLTextAreaElement>(null)

	console.log('>>> [APITester] env:', env)

	const processApiOp = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const form = e.currentTarget
			const formData = new FormData(form)
			const path = formData.get('path') as string
			const methodSide = formData.get('methodSide') as string
			const [method, side] = methodSide.split(' ')
			console.log('>>> [processApiOp] method:', method, 'path:', path)
			let url: URL
			switch (side) {
				case 'fe':
					url = new URL(path, env.FRONTEND_URL)
					break
				case 'be':
					url = new URL(path, env.BACKEND_URL)
					break
			}

			const res = await fetch(url!, { method })
			const data = await res.json()
			responseInputRef.current!.value = JSON.stringify(data, null, 2)
		} catch (error) {
			responseInputRef.current!.value = String(error)
		}
	}

	return (
		<div className="flex flex-col gap-6">
			<form onSubmit={processApiOp} className="flex items-center gap-2">
				<Label htmlFor="method" className="sr-only">
					Method
				</Label>
				<Select name="methodSide" defaultValue="GET fe">
					<SelectTrigger className="w-[250px]" id="methodSide">
						<SelectValue placeholder="Method" />
					</SelectTrigger>
					<SelectContent align="start">
						<SelectItem value="GET fe">GET to fe API</SelectItem>
						<SelectItem value="PUT fe">PUT to fe API</SelectItem>
						<SelectItem value="GET be">GET to be API</SelectItem>
					</SelectContent>
				</Select>
				<Label htmlFor="path" className="sr-only">
					Path
				</Label>
				<Input
					id="path"
					type="text"
					name="path"
					defaultValue="/api/hello"
					placeholder="/api/hello"
				/>
				<Button type="submit" variant="secondary">
					Send
				</Button>
			</form>
			<Label htmlFor="response" className="sr-only">
				Response
			</Label>
			<Textarea
				ref={responseInputRef}
				id="response"
				readOnly
				placeholder="Response will appear here..."
				className="min-h-[140px] font-mono resize-y"
			/>
		</div>
	)
}
