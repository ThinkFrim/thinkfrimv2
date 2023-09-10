import React from 'react'

const Button = ({ text, icon, className, style, value, onClick}) => {
  return (
    <>
      <button className={`${className}`} type='submit' style={style} value={value} onClick={onClick}>{text}
        <img src={icon} alt="" />
      </button>
    </>
  )
}

export default Button;