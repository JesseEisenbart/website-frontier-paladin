'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faThreads } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

import React, { useState } from 'react';
import Link from 'next/link';

const Presskit = () => {
	const [isHovering, setIsHovered] = useState(false);
	const onMouseEnter = () => setIsHovered(true);
	const onMouseLeave = () => setIsHovered(false);
	return (
		<div
			className='flex items-center flex-shrink-0 mr-6 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='https://drive.google.com/file/d/1wP58yahctbq21wCbVhiDdxuiyrBhD8c0/view?usp=sharing'>
				{isHovering ? (
					<Image
						src='/images/presskit-highlight.png'
						width={111}
						height={18}
						alt='logo'
					/>
				) : (
					<Image
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
			className='flex items-center flex-shrink-0 mr-6 cursor-pointer'
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Link href='https://store.steampowered.com/app/2804970/Frontier_Paladin/'>
				{isHovering ? (
					<Image
						src='/images/steam-highlight.png'
						width={257}
						height={95}
						alt='logo'
					/>
				) : (
					<Image
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
			<nav className='block z-10 w-full lg:text-sm py-10 animate-fade absolute pl-20 pr-10 bg-gradient-to-r from-[#10181b] via-[#233940] to-[#10181b] bg-black border-b-4 border-brown'>
				<ul className='font-anonymous text-white flex flex-row justify-center space-x-3 lg:space-x-5 content-center'>
					<li className='text-sm font-bold font-hind lg:text-lg h-6 mr-auto button hover:button-hover flex justify-center'>
						<Presskit />
					</li>
					<li className='text-sm font-bold font-hind lg:text-lg h-6 button hover:button-hover flex justify-center'>
						<Wishlist />
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
