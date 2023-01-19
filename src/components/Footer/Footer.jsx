import React from 'react'
import LogoFooter from '../../assets/logo-footer.png'
import Link from '../UI/Link';
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='flex justify-between m-8 text-md text-gray-400'>
        <div className='flex'><BiCopyright className='mr-1 mt-1'/> Developed By <Link className='ml-1 text-myBlue hover:text-myRed'>@iamjunaidjutt</Link>. All Rights Reserved!</div>
        <div className='flex mr-14'>Owner <img src={LogoFooter} alt='logo-footer' className='ml-2'/></div>
    </div>
  )
}

export default Footer