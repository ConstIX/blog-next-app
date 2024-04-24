import { Metadata } from "next"
import MyPosts from "./MyPosts"

export const metadata: Metadata = {
	title: `MyPosts`
}

export default function MyPostsPage() {
	return <MyPosts />
}
