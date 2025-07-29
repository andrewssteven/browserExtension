import React from 'react'

const Button = ({text, className, onClick}) => {
  return (
    <div className={` ${className} py-1 px-4 rounded-4xl border-1  w-fit cursor-pointer font-semibold hover:bg-red-500 hover:text-indigo-950`} onClick={onClick} >
        {text}
    </div>
  )
}

export default Button