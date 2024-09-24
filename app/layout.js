import './globals.css';
import { Inter } from 'next/font/google';
import { Montserrat, Hind } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
const hind = Hind({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-hind',
});

const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});

export const metadata = {
	title: {
		template: '%s | Frontier Paladin',
		default: 'Frontier Paladin | Wishlist on Steam',
	},
	description:
		'A dark fantasy blend of crunchy combat and action-tower defense. Defend your castle against waves of evil. Go on quests to discover powerful lost artifacts, recruit helpers, and choose between powerful Blessings.',
	metadataBase: new URL('https://frontierpaladin.com'),
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	manifest: '/site.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon.ico', type: 'image/x-icon' },
		],
		apple: '/apple-touch-icon.png',
	},
	openGraph: {
		title: 'Frontier Paladin | Wishlist on Steam',
		description:
			'A dark fantasy blend of crunchy combat and action-tower defense. Defend your castle against waves of evil. Go on quests to discover powerful lost artifacts, recruit helpers, and choose between powerful Blessings.',
		url: 'https://frontierpaladin.com',
		siteName: 'Frontier Paladin',
		locale: 'en-US',
		type: 'website',
		images: [
			{
				url: 'https://www.frontierpaladin.com/1200x630.jpg',
				width: 1200,
				heigh: 630,
				alt: 'Cover art',
			},
		],
		twitter: {
			card: 'summary_large_image',
			title: 'Frontier Paladin | Wishlist on Steam',
			description:
				'A dark fantasy blend of crunchy combat and action-tower defense. Defend your castle against waves of evil. Go on quests to discover powerful lost artifacts, recruit helpers, and choose between powerful Blessings.',
			site: 'https://frontierpaladin.com',
			creator: '@singularscheme',
			images: [
				{
					url: 'https://www.frontierpaladin.com/1024x512.jpg',
					width: 1024,
					height: 512,
					alt: 'Cover art',
				},
			],
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${hind.variable} ${montserrat.variable}`}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
