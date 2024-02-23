'use client'
import { motion } from 'framer-motion'

const Header = ({ children }) => {
    return (
        <motion.h1
            className='font-monterrat text-white text-5xl lg:text-6xl font-bold my-2 lg:my-5'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
            viewport={{ once: true }}
        >
            {children}
        </motion.h1>
    )
}

export default Header