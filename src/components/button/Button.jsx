import React from 'react'

const Button = ({ text, icon }) => {
  return (
    <button type='button' className='bg-underline-bg p-5 px-10 rounded-lg text-xl font-medium'>{text} {icon}</button>
  )
}

export default Button;