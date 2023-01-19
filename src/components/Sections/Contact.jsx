import React from 'react'
// import FormTemplate from '../InputForm/FormTemplate'
import InputForm from '../InputForm/InputForm'
import Link from '../UI/Link';
import { GoLocation } from "react-icons/go";
import { BsTelephone, BsFillEnvelopeFill } from "react-icons/bs";

function Contact(props) {
  return (
    <div className='flex py-8'>
        <div className='w-4/12 p-8 my-20 basis-4/12'>
            <h2 className='my-2 text-4xl font-semibold text-myBlue mb-16 underline decoration-myRed underline-offset-8 ' ref={props.Ref}>Contact Me</h2>
            <h2 className='text-2xl text-myBlue font-semibold'>Muhammad Junaid</h2>
            <div className='my-12'>
                <p className='flex text-gray-400 my-3'><GoLocation className="mr-2 "/> Lahore, Pakistan</p>
                <p className='flex text-gray-400 my-3'><BsTelephone className="mr-2 "/> +923074254648</p>
                <Link className='flex text-gray-400 my-3'><BsFillEnvelopeFill className="mr-2  "/> <a href='mailto:info@iamjunaidjutt.tech'>info@iamjunaidjutt.tech</a></Link>
            </div>
        </div>
        <InputForm />
    </div>
  )
}

export default Contact