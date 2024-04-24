import axios from './axios'
import { IPost, IPosts } from '@/types/posts.types'

class PostService {

   private BASE_URL = '/posts'

   async getPosts() {
		const { data } = await axios.get<IPosts>(`${this.BASE_URL}`)
		return data
	}

   async getPostById(id: string) {
		const { data } = await axios.get<IPost>(`${this.BASE_URL}/${id}`)
		return data
	}

   async getMyPosts() {
		const { data } = await axios.get<IPost[]>(`${this.BASE_URL}/user/my`)
		return data
	}

   async createPosts(params: Record<string, string>) {
		const { data } = await axios.post<IPosts>(`${this.BASE_URL}`, params)
		return data
	}

   async editPost(params: Record<string, string>) {
		const { data } = await axios.put<IPosts>(`${this.BASE_URL}/${params.id}`, params)
		return data
	}

   async removePost(id: string) {
		const { data } = await axios.delete<IPosts>(`${this.BASE_URL}/${id}`)
		return data
	}
}

export const postService = new PostService()