import React from 'react'
// import Img from '../../assets/img.png'
import Img2 from '../../assets/img-2.jpg'
import PrimaryButton from '../UI/PrimaryButton'

const AboutMe = (props) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  };
  return (
    <div className='lg:flex lg:py-8 lg:flex-wrap lg:justify-between ' ref={props.Ref}>
        <div className='lg:w-3/5 lg:p-8 pt-28 px-8 lg:my-20 lg:basis-3/5'>
            <h2 className='my-2 text-4xl font-semibold text-myBlue mb-16 underline decoration-myRed underline-offset-8' >About Me</h2>
            <div className='hidden lg:block'>
              <h3 className='my-3 text-2xl font-md'>Muhammad Junaid</h3>
              <p className='my-3 mr-5 mb-6 text-gray-400'>I’m Tech Enthusiastic with a strong background in Computer Science and Programming. I’m a continuous learner and a self-taught full-stack developer. I have expertise in frontend development using tools and technologies like HTML, CSS, Bootstrap, JavaScript, JQuery, EJS, React, backend development using technologies Node.js with Express.js, databases like MySQL, MongoDB, and version control systems such as Git, GitHub, etc. I’m highly inspired to learn about new skills and technologies and seek some moments to grow progressively in computer science every day.</p>
              <PrimaryButton onClick={() => scrollToSection(props.portfolioRef)}>See My Work</PrimaryButton>
            </div>
        </div>
        <div className='lg:basis-2/5 lg:mt-28'>
          <img src={Img2} alt='Junaids Image' className='  lg:rounded-5xl lg:mr-20 rounded-xl lg:w-7/12 max-lg:m-16 ml-12 max-lg:my-8 max-lg:w-72'/>
        </div>
        <div className='lg:hidden p-8 w-96 mb-28'>
              <h3 className='mb-6 text-2xl font-md'>Muhammad Junaid</h3>
              <p className='my-3 mr-5 mb-6 text-gray-400'>I’m Tech Enthusiastic with a strong background in Computer Science and Programming. I’m a continuous learner and a self-taught full-stack developer. I have expertise in frontend development using tools and technologies like HTML, CSS, Bootstrap, JavaScript, JQuery, EJS, React, backend development using technologies Node.js with Express.js, databases like MySQL, MongoDB, and version control systems such as Git, GitHub, etc. I’m highly inspired to learn about new skills and technologies and seek some moments to grow progressively in computer science every day.</p>
              <PrimaryButton onClick={() => scrollToSection(props.portfolioRef)}>See My Work</PrimaryButton>
            </div>
    </div>
  )
}

export default AboutMe