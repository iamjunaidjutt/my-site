import React from 'react'

const SecondaryButton = props => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className={`text-white bg-myRed px-5 py-3 hover:bg-myBlue hover:text-myBgDark transition ease-in duration-300 delay-100 drop-shadow-lg inline-block shadow-myGray ${props.className}`}>{props.children}</button>
  )
}

export default SecondaryButton