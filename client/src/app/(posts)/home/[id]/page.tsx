import { Metadata } from "next"
import PostDetails from "./PostDetails"

export const metadata: Metadata = {
	title: `PostDetails`
}

export default function PostDetailsPage() {
	return <PostDetails />
}
