'use client'

import Container from './Container'
import Header from './Header'
import Image from 'next/image'
import useForm from '@/hooks/utils'
import { useState } from 'react'
import { motion } from 'framer-motion'

const FORM_ENDPOINT = 'https://assets.mailerlite.com/jsonp/412044/forms/112031770432505237/subscribe'

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\']+(\.[^<>()\[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/i
)

const Email = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [emailStatus, setEmailStatus] = useState('')

    const additionalData = {
        sent: new Date().toISOString(),
    }

    const { handleSubmit, status, message } = useForm({})

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target

        switch(name) {
            case 'first_name':
                setFirstName(value)
                break;
            case 'last_name':
                setLastName(value)
                break;
            case 'email':
                let newStatus = (!validEmailRegex.test(value) && value.length > 0)
                    ? '❌Please enter a valid email' 
                    : value.length > 0 
                        ? '✅'
                        : ''
                setEmail(value)
                setEmailStatus(newStatus)
                break;
            default:
                break;
        }
    }

    const handleFormSubit = (e) => {
        e.preventDefault()

        if (emailStatus === '✅') {
            handleSubmit(e)
        } 
    }

    return (                          
        <motion.div  
            className='w-full py-0 lg:py-8'
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' }}}
            viewport={{ once: true }}
        >
            <Container>
                <div className='text-center text-white text-6xl font-bold font-monterrat pt-24 relative'>
                    <Header>PLAY THE DEMO</Header>
                </div>
                <div className='flex flex-row justify-center mb-2 lg:mb-16'>
                    <div className='w-full md:w-1/2 mb-16 md:mb-8'>
                        <Image
                            className='px-10 md:px-14 xl:px-56 py-8'
                            src={`/images/demo-box.png`}
                            alt='Blood Running demo box' 
                            priority
                            width={879}
                            height={1220}
                        />
                        <h3 className='text-center text-white text-2xl font-bold font-monterrat relative my-8'>Don&apos;t miss out on the private demo!</h3>
                        {status != '' && (
                            <>
                                <h3 className='text-3xl lg:text-5xl font-bold uppercase text-white mb-4'>{status}</h3>
                                <p className='text-lg md:text-xl font-normal text-white mb-4'>{message}</p>
                            </>
                        )}
                        <form className='space-y-4 md:space-y-6' action={FORM_ENDPOINT} onSubmit={handleFormSubit} data-code='' method='POST'>
                            <div>
                                <label htmlFor='email' className='block mb-1 text-md font-medium text-white'>Email {emailStatus.length > 0 && <span className='text-white'>{emailStatus}</span>}</label>
                                <input
                                    onChange={handleChange}
                                    type='email' 
                                    name='email' 
                                    id='email'
                                    className={`${email.length > 0 ? 'text-blue' : 'text-blue/50'}text-md font-medium bg-white border-blue border  focus:border-blue block w-full p-2`}
                                    placeholder='johndoe@gmail.com' 
                                    required 
                                    autoComplete='email'
                                    value={email}
                                />
                            </div>
                            <div>
                            <motion.button 
                                type='submit' 
                                
                                className='font-hind flex justify-center text-center hover:bg-white hover:text-pink bg-pink text-white text-lg font-bold pt-3 pb-2 px-9 shadow-md w-full mt-10'
                            >
                                YES I WANT TO PLAY THE DEMO!
                            </motion.button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </motion.div>
    )
}

export default Email