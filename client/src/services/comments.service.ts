import axios from './axios'
import { IComment } from '@/types/comments.types'

class CommentService {

   private BASE_URL = '/comments'

   async getComments(id: string) {
		const { data } = await axios.get<IComment[]>(`/posts/${this.BASE_URL}/${id}`)
		return data
	}

   async createComments({ postId, comment }: Record<string, string>) {
		const { data } = await axios.post<IComment>(`${this.BASE_URL}/${postId}`, { postId, comment })
		return data
	}
}

export const commentService = new CommentService()