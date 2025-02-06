import React from 'react'
import { HoverBorderGradient } from '../ui/hover-border-gradient'

const SubscribeButton = () => {
  return (
    <div className='text-white p-2'>
        <HoverBorderGradient
        containerClassName="rounded-lg"
        className="bg-gradient-to-b from-blue-300 to-neutral-500 dark:from-slate-700 dark:to-slate-900 flex items-center space-x-2 justify-between gap-4 shadow-blue-500 shadow-sm">
            <input type="text" name="" id="" className='border-none border-0 focus:outline-none' />
            <button className='cursor-pointer hover:text-orange-500 text-sm md:text-base'>Join Now</button>
        </HoverBorderGradient>
    </div>
  )
}

export default SubscribeButton