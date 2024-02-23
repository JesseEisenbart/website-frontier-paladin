'use client'

import { motion } from 'framer-motion'

const AboutSection = ({ children, side='right' }) => {
    return (
        <motion.div
            className='relative w-full lg:w-[47%] flex flex-col justify-start py-4 lg:py-2'
            initial={{ opacity: 0, x: side == 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.75, ease: 'easeInOut' }}}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default AboutSection