import React from 'react'

const Button = ({ text, icon }) => {
  return (
    <button type='button' className='flex items-center gap-3 bg-underline-bg p-5 px-10 rounded-lg text-xl font-medium'>{text}
    <img src={icon} alt="" />
    </button>
  )
}

export default Button;