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
    <nav className='lg:flex justify-between lg:ml-24 lg:pr-28 lg:pl-4 bg-myBgDark h-24 content-center w-full md:max-lg:w-[32rem] fixed inset-0 z-50 shadow-myGray shadow-sm'>
      <div className='max-lg:flex max-lg:justify-between max-lg:px-4 max-md:w-[28rem]'>
        <img src={Logo} alt='Logo' className='m-3 inline-block w-[67] h-[72]'/>
        {!toggle && <CgMenuRight onClick={() => setToggle((prev) => !prev)}  className='lg:hidden inline-block text-4xl hover:text-myBlue mt-10 mr-16 transition ease-in duration-300 delay-75'/>}
        {toggle && <RxCross1 onClick={() => setToggle((prev) => !prev)}  className='lg:hidden inline-block text-4xl hover:text-myBlue mt-10 mr-16 transition ease-in duration-300 delay-75'/>}
      </div>

        <div className={`mr-24 hidden lg:flex `}>
          <ul className='flex mt-9 mr-6'>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.aboutMeRef)}>About</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue'  onClick={() => scrollToSection(props.skillsRef)}>Skills</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.portfolioRef)}>Portfolio</Link></li>
            <li><Link className='lg:mx-6 lg:my-0 my-2 hover:text-myBlue' onClick={() => scrollToSection(props.contactRef)}>Contact</Link></li>
          </ul>
          <div className='mt-6'>
            <SecondaryButton className=' h-auto'>Resume</SecondaryButton>
          </div>
        </div>

        {toggle && <div className={`lg:hidden bg-myGray p-8 transition ease-linear duration-300 delay-100`}>
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