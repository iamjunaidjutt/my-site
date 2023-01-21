import React from 'react'

const Link = props => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className={`hover:text-myBlue  transition ease-in duration-200 delay-75 hover:underline underline-offset-4 ${props.className}`}>{props.children}</button>
  )
}

export default Link