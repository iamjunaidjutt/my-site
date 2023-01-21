import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

const InputForm = (props) => {
  return (
    <form className={`lg:mt-56 lg:w-6/12 max-lg:text-center lg:ml-64 lg:mb-24 max-lg:w-96 ${props.className}`} action="mailto:info@iamjunaidjutt.tech" method="post" enctype="text/plain">
        <h3 className='m-2 text-2xl text-myBlue font-semibold mt-0'>Send Your Query!</h3>
        <div className='max-lg:mx-4 max-lg:my-3'>
          <div className='lg:flex'>
            <input type='text' name='yourName' placeholder='Name' className='m-2 block lg:w-64 max-lg:w-88 bg-myGray p-3 ' required/>
            <input type='email' name='yourEmail' placeholder='Email' className='m-2 block lg:w-64 max-lg:w-88 bg-myGray p-3 ' required/>
          </div>
          <input type='text' name='yourSubject' placeholder='Subject' className='m-2 block lg:w-132 max-lg:w-88 bg-myGray p-3 ' required/>
          <textarea name="yourMessage" id="" placeholder='Message' rows="10" className='m-2 lg:my-4 block bg-myGray p-3 lg:w-132 max-lg:w-88' required/>
        </div>
        <PrimaryButton type="submit" className='ml-2 lg:ml-76 max-lg:mt-3'>Send Message</PrimaryButton>
    </form>
  )
}

export default InputForm