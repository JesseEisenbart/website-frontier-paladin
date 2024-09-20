'use client';

import React, { useCallback, useEffect } from 'react';
import YouTube from 'react-youtube';
import useStore from '../stores/globalStore';
import { AnimatePresence, motion } from 'framer-motion';

const youtubeOpts = {
	height: '100%',
	width: '100%',
	playerVars: {
		autoplay: 1,
		modestbranding: 1,
		controls: 0,
		rel: 0,
	},
};

const Trailer = () => {
	const { isTrailerOpen, closeTrailer } = useStore();

	const downHandler = useCallback(
		({ key }) => {
			if (key === 'Escape') {
				closeTrailer();
			}
		},
		[closeTrailer]
	);

	useEffect(() => {
		window.addEventListener('keydown', downHandler);
		return () => {
			window.removeEventListener('keydown', downHandler);
		};
	}, [downHandler]);

	return (
		<AnimatePresence>
			{isTrailerOpen && (
				<motion.div
					className='w-full h-full fixed z-20'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
				>
					<div className='w-full h-full absolute top-0 left-0 z-30 bg-black/80' />
					<a
						className='absolute top-2 right-2 z-50 text-white text-3xl hover:cursor-pointer px-5 py-5'
						onClick={closeTrailer}
					>
						X
					</a>
					<div className='aspect-video absolute top-0 left-0 px-24 py-32 w-full h-full z-40'>
						<YouTube
							className='w-full h-full'
							videoId='wvWqTduNdxY?si=CfFcQ57nJlmjAcZL'
							opts={youtubeOpts}
							onEnd={closeTrailer}
						/>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Trailer;
