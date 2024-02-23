'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaSteam } from 'react-icons/fa6'


const Hero = () => {
    return (
        <div className='w-full h-screen'>
            <div className='w-full h-full'>
            <Image
                className='hidden lg:block object-cover'
                src={`/cover-art.png`}
                alt='Blood Running cover art'
                fill
                priority 
                quality={100}
			/>
            <Image
                className='block lg:hidden object-cover'
                src={`/mobile-cover-art.jpg`}
                alt='Blood Running cover art'
                fill
                priority 
                quality={100}
			/>
            <div className='absolute top-0 left-0 w-full h-full object-cover bg-gradient-to-t from-clay via-clay/50 via-25% to-blue/0'/>
                <motion.div 
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
                    viewport={{ once: true }}
                >
                    <Image 
                        className='px-6 lg:px-0 absolute top-1/4 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 lg:p-56 xl:p-56 animate-fade'
                        width={1280}
                        height={720}
                        alt='Blood Running Logo'
                        src='/logo.png'
                        priority 
                        quality={100}
                    /> 
                </motion.div>
            </div>
            <div className='absolute top-1/2 lg:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <motion.a
                class="font-hind flex justify-center text-center hover:bg-white hover:text-pink bg-pink text-white text-lg lg:text-3xl font-bold pt-3 pb-2 px-2 lg:px-9 shadow-md"
                href='https://store.steampowered.com/app/2641490/Blood_Running/?utm_source=Website'
                target='_blank'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 0.3, ease: 'easeOut' }}}
                viewport={{ once: true }}
            > 
                <span className='h-full line'>WISHLIST ON STEAM</span>
            </motion.a>  
            </div>
        </div>
    )
}

export default Hero