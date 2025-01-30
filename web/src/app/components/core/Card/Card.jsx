import React from 'react'

const Card = () => {
  return (
    <div className='border-none max-w-sm bg-slate-400 text-white p-4 flex flex-col gap-2 bg-transparent rounded-md shadow-md shadow-slate-300'>
      <div className='flex gap-4 items-center'>
        <span className="rounded-full h-9 w-9 bg-gray-300"></span>
        <p>UserName</p>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <img src="./logo.webp" alt="" srcset="" className='w-full rounded-lg' />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quo minus et dolorem laboriosam porro enim suscipit, magnam necessitatibus aperiam ad aliquam nostrum neque est laborum, obcaecati dolorum dolores reprehenderit.</p>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-3'>
          <span>like</span>
          <span>comment</span>
        </div>
        <span>save</span>
      </div>
    </div>
  )
}

export default Card