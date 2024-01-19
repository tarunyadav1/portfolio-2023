import './global.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'

import Sidebar from './components/sidebar'
import { ThemeProvider } from './components/theme-provider'
import BackgroundEffect from './components/background-effect'

const graphik = localFont({
	src: [
		{
			path: '../public/fonts/Graphik-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Graphik-Medium.ttf',
			weight: '600',
			style: 'bold',
		},
	],
	variable: '--font-graphik',
	display: 'swap',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://tarunyadav.xyz'),
	title: {
		default: 'Tarun Yadav',
		template: '%s | Tarun Yadav',
	},
	description: 'Developer and creator.',
	openGraph: {
		title: 'Tarun Yadav',
		description: 'Developer and creator.',
		url: 'https://tarunyadav.xyz',
		siteName: 'Tarun Yadav',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Tarun Yadav',
		card: 'summary_large_image',
	},
	verification: {
		google: '',
		yandex: '',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body
				className={clsx(
					'antialiased text-black dark:text-slate-400 bg-background selection:text-teal-900',
					graphik.variable
				)}>
				<BackgroundEffect />

				<ThemeProvider attribute="class" enableSystem defaultTheme="dark">
					<div className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
						<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
							<Sidebar />
							{children}
							<Analytics />
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
