import TanStackProvider from '@/components/TanStackProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import 'modern-normalize'
import './globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>
				<TanStackProvider>
					<Header />
					{children}
					<Footer />
				</TanStackProvider>
			</body>
		</html>
	)
}

