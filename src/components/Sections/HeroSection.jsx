import React, { useState } from 'react'
import JImage from '../../assets/J.png'
import JHover from '../../assets/JHover.png'
import Link from '../UI/Link'
import PrimaryButton from '../UI/PrimaryButton'

const HeroSection = (props) => {
  const [isShown, setIsShown] = useState(false);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <main className='flex'>
        <div className='w-3/5 p-8 py-44 lg:py-40 lg:mt-24'>
            <h1 className='py-2 text-5xl font-semibold'>Hi! I'm <span className='text-myBlue'>Muhammad Junaid</span></h1>
            <h3 className='py-2 text-xl max-md:w-88'>Deputy Head of Marketing <Link><a href='https://softecnu.org/' target='_blank'>@SOFTEC</a></Link> | SE Sophomore <Link><a href='https://nu.edu.pk/' target='_blank'>@FAST NUCES</a></Link></h3>
            <p className='py-2 text-gray-400 max-md:w-84'>I’m Tech Enthusiastic with a strong background in Computer Science and Programming. I’m a continuous learner and a self-taught full-stack developer.</p>
            <Link className='py-2 block pb-6 text-myRed' onClick={() => scrollToSection(props.aboutMeRef)}>More About Me</Link>
            <PrimaryButton onClick={() => scrollToSection(props.contactRef)}>Contact Me</PrimaryButton>
        </div>
        {!isShown && <img src={JImage} alt="JImage" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='pt-1 lg:block hidden lg:mt-20 transition ease-in duration-400 delay-300' />}
        {isShown && <img src={JHover} alt="JImage" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className='pt-1 lg:block hidden lg:mt-20 transition ease-in duration-400 delay-300' />}
    </main>
  )
}

export default HeroSection