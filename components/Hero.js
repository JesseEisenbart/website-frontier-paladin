'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<div className='w-full h-full'>
				<Image
					className='object-cover'
					src={`/images/cover.png`}
					alt='Frontier Paladin cover art'
					fill
					priority
					quality={100}
				/>
				<div className='absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-t from-clay via-clay/50 via-25% to-blue/0' />
				<motion.div
					className='absolute top-0 left-0 w-full h-full object-cover'
					initial={{ opacity: 0, y: 60 }}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: { duration: 0.5, ease: 'easeInOut' },
					}}
					viewport={{ once: true }}
				>
					<Image
						className='absolute top-[45%] left-1/4 transform -translate-x-1/2 -translate-y-2/3 animate-fade'
						alt='Frontier Paladin logo'
						src='/images/logo.png'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '35%', height: 'auto' }} // optional
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
