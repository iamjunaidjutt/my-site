import React from 'react'

const PrimaryButton = props => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className={`text-myBlue border border-myBlue py-5 px-16 text-sm font-medium hover:bg-myBlue hover:text-myBgDark transition ease-in duration-300 delay-100 drop-shadow-lg inline-block shadow-myGray ${props.className}`}>{props.children}</button>
  )
}

export default PrimaryButton