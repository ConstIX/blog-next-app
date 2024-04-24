import { Metadata } from "next"
import CreatePost from "./CreatePost"

export const metadata: Metadata = {
	title: `CreatePost`
}

export default function CreatePostPage() {
	return <CreatePost />
}
