import { Metadata } from 'next'
import Register from './Register'

export const metadata: Metadata = {
	title: `Register`
}

export default function RegisterPage() {
	return <Register />
}
