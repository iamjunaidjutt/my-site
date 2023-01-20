import React, { useRef } from 'react'
import NavBar from '../NavBar/NavBar'
import HeroSection from '../Sections/HeroSection'
import AboutMe from '../Sections/AboutMe'
import Partition from '../UI/Partition'
import Skills from '../Sections/Skills'
import Portfolio from '../Sections/Portfolio'
import Contact from '../Sections/Contact'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

const RightSideBar = () => {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);


  return (
    <div className='w-full lg:ml-24'>
      <ScrollToTop className='hidden lg:block'/>
      <NavBar aboutMeRef={aboutMeRef} skillsRef={skillsRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      <HeroSection aboutMeRef={aboutMeRef} contactRef={contactRef}/>
      <Partition/>
      <AboutMe Ref={aboutMeRef} portfolioRef={portfolioRef}/>
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