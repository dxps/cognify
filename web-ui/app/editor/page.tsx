import { CardWrapper } from '@/components/auth/card-wrapper'
import { RichTextEditor } from '@/components/tiptap/rich-text-editor'

export default function EditorPage() {
	return (
		<CardWrapper width="w-5/6" height="h-[calc(100dvh-10rem)]">
			<RichTextEditor />
		</CardWrapper>
	)
}
