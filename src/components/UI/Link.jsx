import React from 'react'

const Link = props => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className={`hover:text-myBlue ${props.className}`}>{props.children}</button>
  )
}

export default Link