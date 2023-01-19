import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

const InputForm = () => {
  return (
    <form className='mt-56 w-6/12 ml-64 mb-24'>
        <h3 className='m-2 text-2xl text-myBlue font-semibold mt-0'>Send Your Query!</h3>
        <div className='flex'>
            <input type='text' placeholder='Name' className='m-2 block w-64 bg-myGray p-3 ' required/>
            <input type='email' placeholder='Email' className='m-2 block w-64 bg-myGray p-3 ' required/>
        </div>
        <input type='text' placeholder='Subject' className='m-2 block w-132 bg-myGray p-3 ' required/>
        <textarea name="" id="" placeholder='Message' cols="61" rows="10" className='m-2 my-4 block bg-myGray p-3 ' required/>
        <PrimaryButton className=' ml-88'>Submit</PrimaryButton>
    </form>
  )
}

export default InputForm