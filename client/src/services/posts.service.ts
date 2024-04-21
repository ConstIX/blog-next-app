import axios from './axios'

class PostService {

   private BASE_URL = '/posts'

   async getPosts() {
		const { data } = await axios.get<any>(`${this.BASE_URL}`)
		return data
	}
}

export const postService = new PostService()