'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Presskit = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<div
			className='flex items-center flex-shrink-0 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='https://drive.google.com/file/d/1wP58yahctbq21wCbVhiDdxuiyrBhD8c0/view?usp=sharing'>
				{isHovering ? (
					<Image
						className='px-2 sm:px-0'
						src='/images/presskit-highlight.png'
						width={111}
						height={18}
						alt='logo'
					/>
				) : (
					<Image
						className='px-2 sm:px-0'
						src='/images/presskit.png'
						width={111}
						height={18}
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
						className='px-7 sm:px-0'
						src='/images/steam-highlight.png'
						width={257}
						height={95}
						alt='logo'
					/>
				) : (
					<Image
						className='px-7 sm:px-0'
						src='/images/steam.png'
						width={257}
						height={95}
						alt='logo'
					/>
				)}
			</Link>
		</div>
	);
};

const Nav = () => {
	return (
		<div className='w-full'>
			<nav className='block z-10 w-full py-10 animate-fade absolute pl-16 pr-10 bg-gradient-to-r from-[#10181b] via-[#233940] to-[#10181b] bg-black border-b-4 border-brown'>
				<ul className='font-anonymous text-white flex flex-row justify-center content-center w-full px-0 sm:px-20'>
					<li className='h-6 mr-auto button hover:button-hover flex justify-center sm:ml-6'>
						<Presskit />
					</li>
					<li className='h-6 button hover:button-hover flex justify-center'>
						<Wishlist />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
