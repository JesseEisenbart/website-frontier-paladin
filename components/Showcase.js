'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaSteam } from 'react-icons/fa6'
import Container from './Container'

const Showcase = () => {
    return (
        <div className='mt-10  w-full relative'>
            <div className='w-full relative'>
                <Image
                className='object-cover w-full'
                    src={`/images/screenshots/screenshot-5.png`}
                    alt='Blood Running cover art'
                    width={1920}
                    height={1080}
                    unoptimized 
                    priority
                />
                <div className='absolute top-0 left-0 w-full h-[50%] object-cover bg-gradient-to-t from-clay/0 via-25% via-clay/50 to-clay'/>
                <div className='absolute bottom-0 left-0 w-full h-[40%] object-cover bg-gradient-to-t from-pink to-blue/0'/>
            </div>
            <motion.div 
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
                    viewport={{ once: true }}
                >
                    <Image
                        className='hidden md:block absolute px-6 md:px-24 lg:p-56 top-1/4 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 animate-fade'
                        width={1280}
                        height={720}
                        alt='Blood Running Logo'
                        src='/images/logo.png'
                        priority 
                        quality={100}
                    /> 
                </motion.div>
            <div className='absolute top-1/3 md:top-1/2 lg:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <motion.a
                    className="font-hind flex justify-center text-center hover:bg-white hover:text-pink bg-pink text-white text-xl lg:text-3xl font-bold pt-3 pb-2 px-4 lg:px-9 shadow-md"
                    href='https://store.steampowered.com/app/2641490/Blood_Running/?utm_source=Website'
                    target='_blank'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { delay: 0.4, duration: 0.3, ease: 'easeOut' }}}
                    viewport={{ once: true }}
                > 
                    <span className='line'>WISHLIST ON STEAM</span>
                </motion.a> 
            </div> 
        </div>
    )
}

export default Showcase