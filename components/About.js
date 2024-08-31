import Container from './Container'
import React from 'react'
import AboutSection from './AboutSection'
import Image from 'next/image'
import Header from './Header'

const About = () => {
  return (
    <Container>
        <div className='text-center text-white text-6xl font-bold font-monterrat pb-5 lg:py-32'>
            <Header>BLEED TO SURVIVE</Header>
            <p className='text-left font-hind text-silver text-lg lg:text-xl font-normal md:max-w-[50%] w-full mx-auto mb-10'>
            Blood Running is a stylish pixel art extraction shooter. You'll enter the cyber-wasteland, fight off androids, aliens, and bandits, loot valuable armour and items, and explore the apocalyptic world.<br/><br/>Your job as a Blood Runner is simple; make the Sovereigns happy. Collect bountiful loot, bleed, kill whatever and whoever stands in your way, survive the wasteland, and spend your hard earned creds in the Outpost.
            </p>
        </div>
        <div>

        </div>
        <div className='md:flex w-full flex-col mb-1 px-0 lg:px-10'>
            <div className='w-full flex flex-col lg:flex-row mb-14 justify-between'>
                <AboutSection side='left'>
                    <Image
                        src={`/images/screenshots/screenshot-1.png`}
                        alt='Blood Running screenshot'
                        unoptimized 
                        priority
                        width={1920}
                        height={1080}
                    />
                </AboutSection>
                <AboutSection>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>QUESTS & LOOTING</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                        Between runs, you'll explore Outpost 072 and embark on various quests that take you through the world. You'll uncover secrets and stories about the world by meeting intriguing characters. With over 100 unique items to find, you can craft new items, enhance your base, and trade with merchants.
                    </p>
                </AboutSection>
            </div>
            <div className='w-full flex flex-col-reverse lg:flex-row mb-14 justify-between'>
                <AboutSection side='left'>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>UNIQUE EVERY TIME</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                    With a randomly generated world, no two runs will be the same. Explore the maps, each with a unique keystone location featuring constantly changing environments, loot locations, and layouts. Improve your skills to navigate, succeed, and uncover the secrets of each map.
                    </p>
                </AboutSection>
                <AboutSection>
                    <Image
                        src={`/images/screenshots/screenshot-2.png`}
                        alt='Blood Running screenshot'
                        unoptimized 
                        priority
                        width={1920}
                        height={1080}
                    />
                </AboutSection>
            </div>
            <div className='w-full flex flex-col lg:flex-row mb-14 justify-between'>
                <AboutSection side='left'>
                    <Image
                        src={`/images/screenshots/screenshot-6.png`}
                        alt='Blood Running screenshot'
                        unoptimized 
                        priority
                        width={1920}
                        height={1080}
                    />
                </AboutSection>
                <AboutSection>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>WEAPON MODDING</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                        Run the wastelands in a way that matches your playstyle. With fully modular guns, you can mix and match to make yourself the toughest challenger in the wastelands. Build a weapon that suits your style and become the ultimate runner.
                    </p>
                </AboutSection>
            </div>
        </div>
    </Container>
  )
}

export default About