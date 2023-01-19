import React, { useRef } from 'react'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../Sections/HeroSection'
import AboutMe from '../Sections/AboutMe'
import Partition from '../UI/Partition'
import Skills from '../Sections/Skills'
import Portfolio from '../Sections/Portfolio'
import Contact from '../Sections/Contact'
import Footer from '../Footer/Footer'

const RightSideBar = () => {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className='w-full ml-24'>
      <NavBar aboutMeRef={aboutMeRef} skillsRef={skillsRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      <HeroSection/>
      <Partition/>
      <AboutMe Ref={aboutMeRef}/>
      <Partition/>
      <Skills Ref={skillsRef}/>
      <Partition/>
      <Portfolio Ref={portfolioRef}/>
      <Partition/>
      <Contact Ref={contactRef}/>
      <Partition/>
      <Footer />
    </div>
  )
}

export default RightSideBar