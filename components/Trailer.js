import React from 'react'
import Container from './Container'

const Trailer = () => {
    return (
        <Container>
            <div className='px-0 lg:mt-24 mb-24'>
                <div className='pb-[56.2061%] mt-12 relative'>
                    <iframe 
                        className='absolute top-0 left-0 w-full h-full' 
                        src='https://www.youtube.com/embed/xiHNu4rKyDA?si=6Ku3gXYgIshklhfJ'
                        title="YouTube video player" 
                        style={{"border" : "0"}} 
                        allowFullScreen
                    />
                </div>
            </div>
        </Container>
    )
}

export default Trailer