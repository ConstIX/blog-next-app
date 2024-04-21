import type { Metadata } from 'next';
import { Providers } from './provider';
import '../scss/style.scss';

export const metadata: Metadata = {
	title: {
		default: 'BlogApp',
		template: `%s | BlogApp`,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
