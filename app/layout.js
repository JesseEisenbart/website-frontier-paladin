import './globals.css'
import { Inter } from 'next/font/google'
import { Montserrat, Hind } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const hind = Hind({ 
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-hind',
})

const montserrat = Montserrat({ 
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
})

export const metadata = {
	title: {
		template: '%s | Blood Running',
		default: 'Blood Running',
	},
	description: 'Plunder the wasteland and bleed to survive.',
	metadataBase: new URL('https://bloodrunning.com'),
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
		],
		twitter: {
            card: 'summary_large_image',
            title: 'Blood Running',
            description: 'Plunder the wasteland and bleed to survive.',
            site: 'https://bloodrunning.com',
            creator: '@deadunicorninc',
            images: [
                {
                    url: 'https://bloodrunning.com/1024x512.jpg',
                    width: 1024,
                    height: 512,
                    alt: 'Blood Running cover art',
                },
            ],
        },
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${hind.variable} ${montserrat.variable}`}>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
