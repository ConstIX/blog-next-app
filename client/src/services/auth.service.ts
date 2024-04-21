import axios from './axios'
import { IAuth } from '@/types/auth.types'

class AuthService {

   private BASE_URL = '/auth'

	async register(params: Record<string, string>) {
		const { data } = await axios.post<IAuth>(`${this.BASE_URL}/register`, params)
      if (data.token) window.localStorage.setItem('token', data.token)
		return data
	}

	async login(params: Record<string, string>) {
		const { data } = await axios.post<IAuth>(`${this.BASE_URL}/login`, params)
      if (data.token) window.localStorage.setItem('token', data.token)
		return data
	}

	async getMe() {
		const { data } = await axios.get<IAuth>(`${this.BASE_URL}/me`)
		return data
	}
}

export const authService = new AuthService()
