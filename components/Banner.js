'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Banner = () => {
    const images = [
        'screenshot_1.png', 
        'screenshot_2.png', 
        'screenshot_3.png', 
        'screenshot_4.png', 
        'screenshot_5.png', 
        'screenshot_6.png', 
    ]
    
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => { return currentImage < images.length-1 ? currentImage+1 : 0 })        
        }, 4000);

        return () => clearInterval(interval)
    }, []);

    return (             
        <div>
            {images.map((src, index) => (
                <div key={index} style={{
                    opacity: `${index == currentImage ? 1 : 0}`,
                    transition: 'all 2s',
                    transitionTimingFunction: 'cubic-bezier(0.1, 0.7, 1)'
                }}>
                    <Image
						className='object-cover blur-[1px]'
						src={`/images/screenshots/${src}`}
						alt='Blood Running preview'
						fill
						priority
                        unoptimized 
				    />
                </div>
            ))}
        </div>
    )
}

export default Banner