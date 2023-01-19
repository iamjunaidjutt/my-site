import React, { useRef } from 'react'
import Logo from '../../assets/logo-mini.png'
import Link from '../UI/Link'
import SecondaryButton from '../UI/SecondaryButton'

const NavBar = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <nav className='flex justify-between pr-24'>
        <img src={Logo} alt='Logo' className='m-3 ml-7'/>
        <div className='mt-6'>
            <Link className='mx-6 hover:text-myBlue' onClick={() => scrollToSection(props.aboutMeRef)}>About me</Link>
            <Link className='mx-6 hover:text-myBlue' onClick={() => scrollToSection(props.skillsRef)}>Skills</Link>
            <Link className='mx-6 hover:text-myBlue' onClick={() => scrollToSection(props.portfolioRef)}>Portfolio</Link>
            <Link className='mx-6 hover:text-myBlue' onClick={() => scrollToSection(props.contactRef)}>Contact</Link>
            <SecondaryButton className='mx-6'>Resume</SecondaryButton>
        </div>
    </nav>
  )
}

export default NavBar