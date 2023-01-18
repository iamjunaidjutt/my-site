import React from 'react'
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

const Layout = () => {
  return (
    <div className='flex'>
        <LeftSideBar />
        <RightSideBar />
    </div>
  )
}

export default Layout