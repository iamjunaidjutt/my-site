import React from 'react'
import LogoFooter from '../../assets/logo-footer.png'
import Link from '../UI/Link';
import { BiCopyright } from "react-icons/bi";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <div className='lg:flex lg:justify-between  m-8 text-md text-gray-400'>
        <div className='flex flex-wrap max-lg:text-sm'><BiCopyright className='mr-1 mt-1'/> Developed By <Link className='ml-1 text-myBlue hover:text-myRed'><a href='mailto:info@iamjunaidjutt.tech'>@iamjunaidjutt.</a></Link> All Rights Reserved!</div>
        <div className='flex justify-center mt-4 h-auto text-xl lg:hidden'>
          <div className="border border-myBlue p-3 mx-2 rounded-full hover:bg-myBlue hover:border-white hover:text-myBgDark hover:animate-spin">
            <a href='https://www.linkedin.com/in/muhammad-junaid-621ab91a6' target="_blank">
              <FaLinkedinIn/>
            </a>
          </div>
          <div className="border border-myBlue p-3 mx-2 rounded-full hover:bg-myBlue hover:border-white hover:text-myBgDark hover:animate-spin">
            <a href='https://www.github.com/iamjunaidjutt' target="_blank">
              <FaGithub/>
            </a>
          </div>
          <div className="border border-myBlue p-3 mx-2 rounded-full hover:bg-myBlue hover:border-white hover:text-myBgDark hover:animate-spin">
            <a href='https://twitter.com/iamjunaidjutt_' target="_blank">
              <FaTwitter/>
            </a>
          </div>
        </div>
        <div className='lg:flex mr-14 hidden '>Owner <img src={LogoFooter} alt='logo-footer' className='ml-2'/></div>
    </div>
  )
}

export default Footer