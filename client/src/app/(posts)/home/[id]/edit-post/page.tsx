import { Metadata } from "next"
import EditPost from "./EditPost"

export const metadata: Metadata = {
	title: `EditPost`
}

export default function EditPostPage() {
	return <EditPost />
}
