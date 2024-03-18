import React from 'react'
import Container from './Container'

const Trailer = () => {
    return (
        <Container>
            <div className='px-0 lg:px-24 lg:mt-24'>
                <div className='pb-[56.2061%] mt-12 relative'>
                    <iframe 
                        className='absolute top-0 left-0 w-full h-full' 
                        src='https://www.youtube.com/embed/wM_ZyDll5aQ?si=9655YTnwUWOVI1PG'
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