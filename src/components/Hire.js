import React from 'react'
import { CircularText } from './Icons'

const Hire = () => {
  return (
    <div className='fixed left-4 bottom-4 
    flex items-center justify-center overflow-hidden'
    >
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className={"fill-dark animate-spin-slow"}/>
        </div>
    </div>
  )
}

export default Hire