import { CardWrapper } from '@/components/auth/card-wrapper'
import { RichTextEditor } from '@/components/tiptap/rich-text-editor'

export default function EditorPage() {
	return (
		<CardWrapper width="w-11/12" height="h-[calc(100dvh-10rem)]">
			<RichTextEditor className="min-h-[73vh] max-h-[73vh] border-0" />
		</CardWrapper>
	)
}
