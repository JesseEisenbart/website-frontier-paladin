import Image from 'next/image'
import Script from 'next/script'

import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Email from '@/components/Email'
import Footer from '@/components/Footer'
import Trailer from '@/components/Trailer'
import Nav from '@/components/Nav'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-3PLN4Z5Q5L"/>
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-3PLN4Z5Q5L');
				`}
			</Script>
			<Nav />
			<Hero />
			<About />
			<Trailer />
			<Email />
			<Footer />
		</main>
	)
}
