import React from 'react'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../Sections/HeroSection'
import AboutMe from '../Sections/AboutMe'
import Partition from '../UI/Partition'
import Skills from '../Sections/Skills'
import Portfolio from '../Sections/Portfolio'
import Contact from '../Sections/Contact'
import Footer from '../Footer/Footer'

const RightSideBar = () => {
  return (
    <div className='w-full ml-24'>
      <NavBar/>
      <HeroSection/>
      <Partition/>
      <AboutMe/>
      <Partition/>
      <Skills/>
      <Partition/>
      <Portfolio/>
      <Partition/>
      <Contact/>
      <Partition/>
      <Footer />
    </div>
  )
}

export default RightSideBar