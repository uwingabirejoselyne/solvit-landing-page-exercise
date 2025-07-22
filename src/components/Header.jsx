import React from 'react'

export const Header = () => {
  return (
    <header className='flex justify-between h-24 bg-white text-black  md:px-24 items-center py-12 font-bold md:text-xl color-primay'>
        <div className=''>
            <img src="" alt="" />
            <span>Business <span className='text-primary'>Cafe</span></span>
        </div>
        <div className='hidden md:flex gap-4'>
            <a href=""><span className='text-primary'>Home</span></a>
            <a href="">Space</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>
    </header>
  )
}
