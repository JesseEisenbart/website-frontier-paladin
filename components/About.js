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
        </div>
        <div className='hidden md:flex w-full flex-col mb-1 px-0 lg:px-10'>
            <div className='w-full flex flex-col lg:flex-row mb-14 justify-between'>
                <AboutSection side='left'>
                    <Image
                        src={`/images/screenshots/screenshot-7.png`}
                        unoptimized 
                        priority
                        width={1920}
                        height={1080}
                    />
                </AboutSection>
                <AboutSection>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>UNIQUE EVERY TIME</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                        Explore procedurally generated maps, each with a unique keystone location, featuring constantly changing environments, loot locations, and layouts.
                        <br/>
                        <br/>
                        Improve your skills to navigate, succeed, and uncover the secrets of each map.
                    </p>
                </AboutSection>
            </div>
            <div className='w-full flex flex-col-reverse lg:flex-row mb-14 justify-between'>
                <AboutSection side='left'>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>QUESTS & LOOTING</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                        Between blood runs, you'll explore Outpost 072 and embark on various quests that take you through an intriguing world.
                        <br/>
                        <br/>
                        By meeting intriguing characters, you'll gradually uncover secrets and stories about the world. 
                        <br/>
                        <br/>
                        With over 120 different items to find, you can craft new items, enhance your base, and trade with merchants.
                    </p>
                </AboutSection>
                <AboutSection>
                    <Image
                        src={`/images/screenshots/screenshot-2.png`}
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
                        src={`/images/screenshots/screenshot-3.png`}
                        unoptimized 
                        priority
                        width={1920}
                        height={1080}
                    />
                </AboutSection>
                <AboutSection>
                    <h2 className='font-monterrat text-white text-3xl lg:text-4xl font-bold py-0 mb-5 leading-none'>WEAPON MODDING</h2>
                    <p className='font-hind text-silver text-lg lg:text-xl font-normal'>
                        Run the wastelands in a way that matches your playstyle.
                        <br/>
                        <br/>
                        With fully modular guns, you can mix and match to make yourself the toughest challenger in the wastelands.
                        <br/>
                        <br/>
                        Build a weapon that suits your style and become the ultimate runner.
                    </p>
                </AboutSection>
            </div>
        </div>
    </Container>
  )
}

export default About