import React from 'react'
import PortfolioItems from '../Portfolio/PortfolioItems'
import PrimaryButton from '../UI/PrimaryButton';

const Portfolio = () => {
  const portfolioList = [
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    },
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    },
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    },
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    },
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    }
  ];
  return (
    <div className='p-8 py-36 text-center'>
      <h2 className='my-2 text-4xl font-semibold text-myBlue mb-4 underline decoration-myRed underline-offset-8 text-left'>Portfolio</h2>
      <ul className='flex basis-auto flex-wrap'>
      {portfolioList.map(portfolio => <PortfolioItems title={portfolio.title} content={portfolio.content} techStack={portfolio.techStack} liveLink={portfolio.liveLink} gitLink={portfolio.gitLink}/>)}
      </ul>
      <PrimaryButton className='m-5'>See More</PrimaryButton>
    </div>
  )
}

export default Portfolio