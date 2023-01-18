import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../Sections/HeroSection'

const RightSideBar = () => {
  return (
    <div className='w-full ml-24'>
      <NavBar/>
      <HeroSection />
    </div>
  )
}

export default RightSideBar