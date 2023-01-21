import React from 'react'
import { BsSoundwave } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"

const LeftSideBar = () => {
  return (
    <div className='w-24 h-screen fixed top-0 left-0 text-center shadow-myGray shadow hidden lg:block'>
        <BsSoundwave className='text-3xl m-8'/>
        <div className='ml-10 mt-60'>
          <a href='https://www.linkedin.com/in/muhammad-junaid-621ab91a6' target="_blank">
            <FaLinkedinIn className='text-xl mb-8 hover:text-myBlue hover:animate-spin'/>
          </a>
          <a href='https://www.github.com/iamjunaidjutt' target="_blank">
            <FaGithub className='text-xl mb-8 hover:text-myBlue hover:animate-spin'/>
          </a>
          <a href='https://twitter.com/iamjunaidjutt_' target="_blank">
            <FaTwitter className='text-xl mb-8 hover:text-myBlue hover:animate-spin'/>
          </a>
        </div>
    </div>
  )
}

export default LeftSideBar