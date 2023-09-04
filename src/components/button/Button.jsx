import React from 'react'

const Button = ({ text, icon, className, style }) => {
  return (
    <>
      <button className={`${className}`} type='button' style={style}>{text}
        <img src={icon} alt="" />
      </button>
    </>
  )
}

export default Button;