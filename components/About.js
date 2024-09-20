'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Divider from './Divider';
import Social from './Social';
import useStore from '@/stores/globalStore';

const Trailer = () => {
	const [isHovering, setIsHovered] = useState(false);
	const { openTrailer } = useStore();
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<div
			className='flex items-center flex-shrink-0 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='/' onClick={openTrailer}>
				{isHovering ? (
					<Image
						src='/images/trailer-highlight.png'
						width={0}
						height={0}
						sizes='200vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				) : (
					<Image
						src='/images/trailer.png'
						width={0}
						height={0}
						sizes='200vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				)}
			</Link>
		</div>
	);
};

const Discord = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<div
			className='flex items-center flex-shrink-0 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='https://discord.gg/5DdwvJYunQ'>
				{isHovering ? (
					<Image
						src='/images/discord-button-highlight.png'
						width={0}
						height={0}
						sizes='150vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				) : (
					<Image
						src='/images/discord-button.png'
						width={0}
						height={0}
						sizes='150vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				)}
			</Link>
		</div>
	);
};

const Wishlist = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<div
			className='flex items-center flex-shrink-0 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='https://store.steampowered.com/app/2804970/Frontier_Paladin/'>
				{isHovering ? (
					<Image
						src='/images/wishlist-highlight.png'
						width={0}
						height={0}
						sizes='150vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				) : (
					<Image
						src='/images/wishlist.png'
						width={0}
						height={0}
						sizes='150vw'
						style={{ width: '100%', height: 'auto' }} // optional
						alt='logo'
					/>
				)}
			</Link>
		</div>
	);
};

const About = () => {
	return (
		<div className='w-full min-h-screen relative '>
			<div className='w-full h-full border-t-4 border-brown'>
				<Image
					className='object-cover -z-10'
					src={`/images/background.png`}
					alt='Frontier Paladin art'
					fill
					priority
					quality={100}
				/>
				<div className='relative 2xl:container mx-auto px-10 md:px-36 2xl:px-48 z-20'>
					<motion.div
						className='w-full h-full object-cover flex justify-center mt-32'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<Trailer />
					</motion.div>
					<Divider />
					<motion.div
						className='w-full h-full object-cover flex justify-center my-mt-16'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<Image
							src='/images/characters.png'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '80%', height: 'auto' }} // optional
							alt='logo'
						/>
					</motion.div>
					<motion.div
						className='w-full h-full object-cover flex justify-center mb-48'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<Image
							src='/images/description.png'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '75%', height: 'auto' }} // optional
							alt='logo'
						/>
					</motion.div>
					<Divider />
					<motion.div
						className='w-full h-full object-cover flex justify-center mb-48'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<div className='w-full flex flex-row justify-center px-20'>
							<div className='w-1/2 flex flex-col justify-center items-center px-20'>
								<Image
									className='mb-20'
									src='/images/discord-text.png'
									width={0}
									height={0}
									sizes='100vw'
									style={{ width: '70%', height: 'auto' }} // optional
									alt='logo'
								/>
								<Discord />
							</div>
							<div className='w-1/2 flex flex-col justify-center items-center px-20'>
								<Image
									className='mb-20'
									src='/images/wishlist-text.png'
									width={0}
									height={0}
									sizes='100vw'
									style={{ width: '70%', height: 'auto' }} // optional
									alt='logo'
								/>
								<Wishlist />
							</div>
						</div>
					</motion.div>
					<Divider />
					<motion.div
						className='w-full h-full object-cover flex flex-col items-center justify-center mb-48 mt-36'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<Image
							className='mb-20'
							src='/images/connect.png'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '20%', height: 'auto' }} // optional
							alt='logo'
						/>
						<div className='max-w-2xl w-full px-24 flex flex-row justify-center'>
							<Social
								link='https://discord.gg/5DdwvJYunQ'
								icon='discord'
							/>
							<Social
								link='https://store.steampowered.com/app/2804970/Frontier_Paladin/'
								icon='steam'
							/>
							<Social
								link='https://youtu.be/wvWqTduNdxY'
								icon='youtube'
							/>
							<Social
								link='https://x.com/FrontierPaladin'
								icon='twitter'
							/>
						</div>
					</motion.div>
					<motion.div
						className='w-full h-full object-cover flex justify-center mb-48 px-64 mt-48'
						initial={{ opacity: 0, y: 60 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { duration: 0.5, ease: 'easeInOut' },
						}}
						viewport={{ once: true }}
					>
						<Image
							src='/images/studio.png'
							width={0}
							height={0}
							sizes='100vw'
							style={{ width: '20%', height: 'auto' }} // optional
							alt='logo'
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default About;
