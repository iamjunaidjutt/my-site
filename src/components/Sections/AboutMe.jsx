import React from 'react'
import Img from '../../assets/img.png'
import PrimaryButton from '../UI/PrimaryButton'

const AboutMe = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <div className='flex py-8'>
        <div className='w-3/5 p-8 my-20 basis-3/5'>
            <h2 className='my-2 text-4xl font-semibold text-myBlue mb-16 underline decoration-myRed underline-offset-8' ref={props.Ref}>About Me</h2>
            <h3 className='my-3 text-2xl font-md'>Muhammad Junaid</h3>
            <p className='my-3 mr-5 mb-6 text-gray-400'>I’m Tech Enthusiastic with a strong background in Computer Science and Programming. I’m a continuous learner and a self-taught full-stack developer. I have expertise in frontend development using tools and technologies like HTML, CSS, Bootstrap, JavaScript, JQuery, EJS, React, backend development using technologies Node.js with Express.js, databases like MySQL, MongoDB, and version control systems such as Git, GitHub, etc. I’m highly inspired to learn about new skills and technologies and seek some moments to grow progressively in computer science every day.</p>
            <PrimaryButton onClick={() => scrollToSection(props.portfolioRef)}>See My Work</PrimaryButton>
        </div>
        <img src={Img} alt='Junaids Image' className='basis-2/5 p-28 mr-16'/>
    </div>
  )
}

export default AboutMe