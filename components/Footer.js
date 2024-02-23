import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-pink py-10 lg:py-20 w-full'>
            <Container>
                <div className='flex flex-col sm:flex-row sm:items-start justify-between items-center text-white'>
                    <div className='mb-8 sm:mb-0'>
                        <h4 className='font-semibold mb-3 text-lg sm:text-md'>Follow Us</h4>
                        <ul className='flex flex-col justify-between items-center sm:inline-block'>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://twitter.com/DeadUnicornInc'>Twitter</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.tiktok.com/@deadunicorninc'>TikTok</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.instagram.com/deadunicorninc/'>Instagram</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.youtube.com/c/DeadUnicorn'>YouTube</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.threads.net/@deadunicorninc'>Threads</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://discord.gg/dead-unicorn-772603203246227547'>Discord</Link></li>
                            <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://store.steampowered.com/developer/DeadUnicorn'>Steam</Link></li>
                        </ul>    
                    </div>
                    <div className='mb-8 sm:mb-0'>
                        <h4 className='font-semibold mb-3 text-lg sm:text-md'>Learn More</h4>
                        <div>
                        <ul className='flex flex-col justify-between items-center sm:inline-block'>
                                <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.deadunicorn.games/about'>About</Link></li>
                                <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://www.youtube.com/playlist?list=PLRlSfhHNYJS-VTo0ofo-EwcNNMg1NUC04'>Devlog</Link></li>
                            </ul>       
                        </div>
                    </div>
                    <div className='mb-8 sm:mb-0'>
                        <h4 className='font-semibold mb-3 text-lg sm:text-md'>Get in Touch</h4>
                        <div>
                        <ul className='flex flex-col justify-between items-center sm:inline-block'>
                                <li className='mt-1 sm:mt-1.5'><a className='flex items-center text-md leading-snug hover:opacity-75' href='mailto:deadunicorn.community@gmail.com'>Email Us</a></li>
                                <li className='mt-1 sm:mt-1.5'><a className='flex items-center text-md leading-snug hover:opacity-75' href='mailto:deadunicorn.help@gmail.com'>Support</a></li>
                            </ul>       
                        </div>
                    </div>
                    <div className='mb-8 sm:mb-0'>
                        <h4 className='font-semibold mb-3 text-lg sm:text-md'>Our Games</h4>
                        <div>
                        <ul className='flex flex-col justify-between items-center sm:inline-block'>
                                <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://store.steampowered.com/app/2641490/Blood_Running'>Blood Running</Link></li>
                                <li className='mt-1 sm:mt-1.5'><Link className='flex items-center text-md leading-snug hover:opacity-75' href='https://store.steampowered.com/app/1537080/Return/'>Return</Link></li>
                            </ul>       
                        </div>
                    </div>
                    <div className='mb-8 sm:mb-0 flex flex-col justify-between items-center sm:block'>             
                        <div className='text-white text-xs'>© 2023 DEAD UNICORN INC.</div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
