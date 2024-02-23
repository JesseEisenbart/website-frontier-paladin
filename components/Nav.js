import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faThreads } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faTiktok } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
    return (
        <>
        <nav className='hidden lg:block z-30 w-full lg:text-sm my-12 animate-fade absolute px-10'>
            <ul className='font-anonymous text-white flex flex-row space-x-3 lg:space-x-5 content-center'>
                <li className='text-sm font-bold font-hind lg:text-lg h-6 mr-auto button hover:button-hover'><a href='https://deadunicorn.games' rel='noreferrer' target='_blank'>DEAD UNICORN</a></li>
                <li className='text-md font-bold font-hind lg:text-lg h-6 mr-auto button hover:button-hover'><a href='https://drive.google.com/drive/folders/1BOiXRi2ysKJXfx4KrQulw0j5O4cc0vjO?usp=sharing' rel='noreferrer' target='_blank'>PRESS KIT</a></li>
                <li className='text-md font-bold font-hind lg:text-lg h-6 mr-auto button hover:button-hover'><a href='https://www.youtube.com/watch?v=dq4W2bGmfz8&list=PLRlSfhHNYJS-VTo0ofo-EwcNNMg1NUC04&pp=iAQB' rel='noreferrer' target='_blank'>DEVLOG</a></li>
                <li><a href='https://discord.gg/X5kdyhAXVu' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faDiscord} className='h-6 w-auto button hover:button-hover'/></a></li>
                <li><a href='https://twitter.com/DeadUnicornInc' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faXTwitter} className='h-6 w-auto button hover:button-hover'/></a></li>
            </ul>
        </nav>
        <nav className='block lg:hidden z-30 w-full mt-5 animate-fade absolute'>
            <ul className='font-anonymous text-white flex flex-row space-x-4 justify-end mr-5'>
                <li className='text-md font-bold font-hind h-6 button hover:button-hover'><a href='https://drive.google.com/drive/folders/1BOiXRi2ysKJXfx4KrQulw0j5O4cc0vjO?usp=sharing' rel='noreferrer' target='_blank'>PRESS KIT</a></li>
                <li className='text-md font-bold font-hind h-6 button hover:button-hover'><a href='https://www.youtube.com/watch?v=dq4W2bGmfz8&list=PLRlSfhHNYJS-VTo0ofo-EwcNNMg1NUC04&pp=iAQB' rel='noreferrer' target='_blank'>DEVLOG</a></li>
                <li><a href='https://discord.gg/X5kdyhAXVu' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faDiscord} className='h-5 w-auto button hover:button-hover'/></a></li>
                <li><a href='https://twitter.com/DeadUnicornInc' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faXTwitter} className='h-5 w-auto button hover:button-hover'/></a></li>
                {/* <li><a href='https://www.instagram.com/deadunicorninc/' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faInstagram} className='h-5 w-auto button hover:button-hover'/></a></li>
                <li><a href='https://www.threads.net/deadunicorninc/' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faThreads} className='h-5 w-auto button hover:button-hover'/></a></li> */}
                {/* <li><a href='https://www.tiktok.com/@deadunicorninc' rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faTiktok} className='h-5 w-auto button hover:button-hover'/></a></li> */}
            </ul>
        </nav>
    </>
    )
}

export default Nav