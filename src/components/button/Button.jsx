import React from 'react'

const Button = ({ text, icon, className, style, value, }) => {
  return (
    <>
      <button className={`${className}`} type='submit' style={style} value={value}>{text}
        <img src={icon} alt="" />
      </button>
    </>
  )
}

export default Button;