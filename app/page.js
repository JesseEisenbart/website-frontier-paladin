import Hero from '@/components/Hero';
import About from '@/components/About';
import Trailer from '@/components/Trailer';
import Nav from '@/components/Nav';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Nav />
			<Hero />
			<About />
			<Trailer />
		</main>
	);
}
