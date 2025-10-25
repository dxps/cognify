import { CardWrapper } from '@/components/auth/card-wrapper'
import { RichTextEditor } from '@/components/tiptap/rich-text-editor'

export default function EditorPage() {
	return (
		<CardWrapper className="w-11/12 h-11/12">
			<RichTextEditor className="min-h-[55vh] max-h-[55vh] border-0" />
		</CardWrapper>
	)
}
