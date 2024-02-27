import { Inter } from 'next/font/google'
import { ActiveSectionContextProvider } from '@/context/action-section-context'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Allen Tokjuman | Portfolio'
}

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} max-h-[100vh] h-[100vh] overflow-y-scroll flex flex-col background-gradient`}>
				<ActiveSectionContextProvider>
					{children}
				</ActiveSectionContextProvider>
			</body>
		</html>
	)
}