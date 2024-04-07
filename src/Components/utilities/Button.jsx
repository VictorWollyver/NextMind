
// import React from 'react'

const Button = ({text}) => {
  return (
    <button className='bg-primary py-2 px-4 mt-4 rounded-md font-medium text-background hover:bg-secondary transition-all hover:text-foreground'>
      {text}
    </button>
  )
}

export default Button