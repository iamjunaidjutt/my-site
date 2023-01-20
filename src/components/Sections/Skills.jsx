import React from 'react'
import SkillsImg from '../../assets/skills.png'

const Skills = (props) => {
  return (
    <div className='p-8 py-36  max-lg:py-28' ref={props.Ref}>
      <h2 className='my-2 text-4xl font-semibold text-myBlue mb-4 underline decoration-myRed underline-offset-8' >Skills</h2>
      <img src={SkillsImg} alt='Skills Image' className='lg:m-auto max-lg:w-64 max-lg:m-10 max-lg:mt-24' />
    </div>
  )
}

export default Skills