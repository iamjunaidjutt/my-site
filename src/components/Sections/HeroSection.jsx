import React from 'react'
import JImage from '../../assets/J.png'
import Link from '../UI/Link'
import PrimaryButton from '../UI/PrimaryButton'

const HeroSection = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <main className='flex'>
        <div className='w-3/5 p-8 py-40'>
            <h1 className='py-2 text-5xl font-semibold'>Hi! I'm <span className='text-myBlue'>Muhammad Junaid</span></h1>
            <h3 className='py-2 text-xl'>Deputy Head of Marketing <Link>@SOFTEC</Link> | SE Sophomore <Link>@FAST NUCES</Link></h3>
            <p className='py-2 text-gray-400'>I’m Tech Enthusiastic with a strong background in Computer Science and Programming. I’m a continuous learner and a self-taught full-stack developer.</p>
            <Link className='py-2 block pb-6 text-myRed' onClick={() => scrollToSection(props.aboutMeRef)}>More About Me</Link>
            <PrimaryButton onClick={() => scrollToSection(props.contactRef)}>Contact Me</PrimaryButton>
        </div>
        <img src={JImage} alt="JImage" className='pt-1' />
    </main>
  )
}

export default HeroSection