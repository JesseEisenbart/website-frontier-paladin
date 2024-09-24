import Image from 'next/image';
import { motion } from 'framer-motion';

const Divider = () => {
	return (
		<motion.div
			className='w-full h-full flex justify-center my-16 sm:my-32'
			initial={{ opacity: 0, y: 60 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: { duration: 0.5, ease: 'easeInOut' },
			}}
			viewport={{ once: true }}
		>
			<Image
				className='px-4 md:px-16'
				src='/images/divider.png'
				priority
				quality={100}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: '100%', height: 'auto' }} // optional
				alt='logo'
			/>
		</motion.div>
	);
};

export default Divider;
