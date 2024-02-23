import Email from '@/components/Email'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import React from 'react'

export const metadata = {
  title: 'Demo',
}

const Demo = () => {
  return (
    <div>    
        <Nav />
        <Email/>
        <Footer/>
    </div>
  )
}

export default Demo