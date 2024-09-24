import Link from 'next/link';
import Image from 'next/image';

const Social = ({ link = '/', icon = 'discord' }) => {
	return (
		<Link href={link} className='w-full px-2 sm:px-6'>
			<Image
				className='mb-10 sm:mb-20'
				src={`/images/${icon}-icon.png`}
				width={0}
				height={0}
				sizes='100vw'
				style={{ width: '100%', height: 'auto' }} // optional
				alt='logo'
			/>
		</Link>
	);
};

export default Social;
