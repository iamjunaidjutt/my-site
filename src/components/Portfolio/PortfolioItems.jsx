import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import SecondaryButton from '../UI/SecondaryButton';
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioItems = (props) => {
  return (
    <li className='w-96 h-96 drop-shadow-lg shadow-myGray bg-myGray mr-6 my-6 text-left'>
        <div className='flex p-6 pl-8'>
            <BsCodeSlash className='text-3xl text-myBlue'/>
            <h3 className='mx-4 text-2xl font-semibold'>{props.title}</h3>
        </div>
        <div className='border-t border-myRed p-8'>
            <p className='h-40 text-gray-200'>{props.content}</p>
            <p className='my-2 font-sm text-sm text-gray-400'>{props.techStack}</p>
            <SecondaryButton className='mr-1'><a href={props.liveLink} target="_blank"><FiExternalLink className='text-xl'/></a></SecondaryButton>
            <SecondaryButton className='mr-1'><a href={props.gitLink} target="_blank"><FiGithub className='text-xl'/></a></SecondaryButton>
        </div>
    </li>
  )
}

export default PortfolioItems