'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<div className='w-full h-screen'>
			<div className='w-full h-full'>
				<Image
					className='object-cover hidden md:block'
					src={`/images/cover.png`}
					alt='Frontier Paladin cover art'
					fill
					priority
					quality={100}
				/>
				<Image
					className='object-cover block md:hidden'
					src={`/images/cover-mobile.png`}
					alt='Frontier Paladin cover art'
					fill
					priority
					quality={100}
				/>
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
						className='hidden md:block absolute top-[45%] left-1/4 transform -translate-x-1/2 -translate-y-2/3 animate-fade'
						alt='Frontier Paladin logo'
						src='/images/logo.png'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '35%', height: 'auto' }} // optional
					/>
					<Image
						className='block md:hidden absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-2/3 animate-fade'
						alt='Frontier Paladin logo'
						src='/images/logo.png'
						width={0}
						height={0}
						sizes='100vw'
						style={{ width: '90%', height: 'auto' }} // optional
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
