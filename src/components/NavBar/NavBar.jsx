import React, { useRef, useState } from 'react'
import Logo from '../../assets/logo-mini.png'
import Link from '../UI/Link'
import SecondaryButton from '../UI/SecondaryButton'
import { CgMenuRight } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <nav className='lg:flex justify-between w-full'>
      <div className='flex justify-between'>
        <img src={Logo} alt='Logo' className='m-3 ml-7 inline-block'/>
        {toggle && <CgMenuRight onClick={() => setToggle((prev) => !prev)}  className='lg:hidden inline-block text-4xl hover:text-myBlue mt-10 mr-8'/>}
        {!toggle && <RxCross1 onClick={() => setToggle((prev) => !prev)}  className='lg:hidden inline-block text-4xl hover:text-myBlue mt-10 mr-8'/>}
      </div>

        <div className={`mr-24 hidden lg:flex `}>
          <ul className='flex mt-10 mr-6'>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.aboutMeRef)}>About me</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue'  onClick={() => scrollToSection(props.skillsRef)}>Skills</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.portfolioRef)}>Portfolio</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.contactRef)}>Contact</Link></li>
          </ul>
          <div className='mt-7'>
            <SecondaryButton className=' h-auto'>Resume</SecondaryButton>
          </div>
        </div>

        {!toggle && <div className={`lg:hidden bg-myGray p-8`}>
          <ul className=''>
            <li><Link className=' my-2 hover:text-myBlue' onClick={() => scrollToSection(props.aboutMeRef)}>About me</Link></li>
            <li><Link className='my-2 hover:text-myBlue'  onClick={() => scrollToSection(props.skillsRef)}>Skills</Link></li>
            <li><Link className='my-2 hover:text-myBlue' onClick={() => scrollToSection(props.portfolioRef)}>Portfolio</Link></li>
            <li><Link className='my-2 hover:text-myBlue' onClick={() => scrollToSection(props.contactRef)}>Contact</Link></li>
          </ul>
          <div className='mt-6'>
            <SecondaryButton className=' h-auto'>Resume</SecondaryButton>
          </div>
        </div>}

    </nav>
  )
}

export default NavBar