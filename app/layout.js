import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Blood Running',
	description: 'Plunder the wasteland and bleed to survive.',
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	manifest: '/site.webmanifest',
	icons: {		
		icon: [
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
			{ url: '/favicon.ico', type: 'image/x-icon'},
		],
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'Blood Running',
		description: 'Plunder the wasteland and bleed to survive.',
		url: 'https://bloodrunning.com',
		siteName: 'Blood Running',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: 'https://bloodrunning.com/1200x630.jpg',
				width: 1200,
				heigh: 630,
				alt: 'Blood Running cover art'
			},
			{
				url: 'https://bloodrunning.com/1024x512.jpg',
				width: 1024,
				heigh: 512,
				alt: 'Blood Running cover art'
			},
		],
		twitter: {
			card: 'summary_large_image',
			title: 'Blood Running',
			description: 'Plunder the wasteland and bleed to survive.',
			twitterSite: 'https://bloodrunning.com',
			creator: '@deadunicorninc',
			images: ['https://bloodrunning.com/1024x512.jpg'],
		}
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
