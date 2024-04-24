import type { Metadata } from 'next'
import { Providers } from './provider'
import Header from '@/components/Header'
import '../scss/style.scss'

export const metadata: Metadata = {
	title: {
		default: 'BlogApp',
		template: `%s | BlogApp`,
	}
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
         <Providers>
            <body>
               <Header />
               {children}
            </body>
         </Providers>
		</html>
	)
}
