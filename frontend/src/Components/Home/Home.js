import React from 'react'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='home'>
        <Navbar />
        <div className='home-banner'>
            <img className='home_image' src='./banner.jpg' alt='banner' />
            {/* <img className='banner-image' src='./mobile_banner.jpg' alt='Mobile Banner' /> */}
        </div>
    </div>
  )
}
