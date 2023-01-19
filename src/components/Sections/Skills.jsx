import React from 'react'
import SkillsImg from '../../assets/skills.png'

const Skills = (props) => {
  return (
    <div className='p-8 py-36'>
      <h2 className='my-2 text-4xl font-semibold text-myBlue mb-4 underline decoration-myRed underline-offset-8' ref={props.Ref}>Skills</h2>
      <img src={SkillsImg} alt='Skills Image' className='m-auto' />
    </div>
  )
}

export default Skills