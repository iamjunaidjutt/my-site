import React from 'react'
import PortfolioItems from '../Portfolio/PortfolioItems'
import PrimaryButton from '../UI/PrimaryButton';

const Portfolio = (props) => {
  const portfolioList = [
    {
      title: "Add User App",
      content: "Add User app using React.js and TailwindCSS",
      techStack: `HTML  REACT  TAILWIND`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/AddUser-App"
    },
    {
      title: "Expense Tracker app",
      content: "It is an expense tracker web app that provides an ease to track your expense by saving it and check it by filtering it on yearly or monthly basis.",
      techStack: `HTML  REACT  CSS`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/Expense-Tracker-App"
    },
    {
      title: "Secret App",
      content: "It is a secret app in which you can login securely by using the google credentials authentication and by using the sign-up or sign-in options for your account and you can see all the secrets that other post their latest...",
      techStack: `EJS NODEJS EXPRESS MONGODB`,
      liveLink: "null",
      gitLink: "https://github.com/iamjunaidjutt/secrets-app"
    }
  ];
  return (
    <div className='p-8 py-36 text-center max-lg:py-28' ref={props.Ref}>
      <h2 className='my-2 text-4xl font-semibold text-myBlue mb-4 underline decoration-myRed underline-offset-8 text-left' >Portfolio</h2>
      <ul className='flex basis-auto flex-wrap -z-10'>
      {portfolioList.map(portfolio => <PortfolioItems key={Math.random()} title={portfolio.title} content={portfolio.content} techStack={portfolio.techStack} liveLink={portfolio.liveLink} gitLink={portfolio.gitLink}/>)}
      </ul>
      <a href='https://github.com/iamjunaidjutt' target='_blank'><PrimaryButton className='m-5'>See More</PrimaryButton></a>
    </div>
  )
}

export default Portfolio