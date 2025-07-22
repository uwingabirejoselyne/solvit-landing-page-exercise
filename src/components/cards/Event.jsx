import React from 'react'

export const Event = ({title,description,image}) => {
  return (
    <div className='mt-6 flex flex-col  items-center text-center justify-around mx-6 shadow-sm '>
        <img src={image} className='w-full' alt="" />
        <div className='space-y-4 mt-4'>
            <div className="relative inline-block">
  <h1 className="text-2xl text-primary font-bold text-center">{title}</h1>
  <div className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] mt-5 w-16 border-b-4 border-primary"></div>
</div>

            <p className='px-16 '>{description}</p>
        </div>
        <button className='text-primary mt-3 font-bold'>Learn more</button>
    </div>
  )
}
