import React from 'react'

export default function footer() {
  return (
    <>
    <div className='z-10 h-d relative w-full overflow-hidden bg-amber-200 '>
        <img className='object-cover rounded-b-xl rounded-bl-xl  lg:w-full' src="./ravers.png"/>
        <span style={{fontFamily:"Baby Gemoy"}} className='text-nowrap text-bl text-[10px] sm:text-xs md:text-2xl lg:text-5xl -translate-x-1/2 absolute top-1/2 flex-nowrap left-1/2'>Shoe Optional, Memories Guaranteed</span>
    </div>
    <div className=' px-1.5 bg-amber-200 inline-flex justify-between items-center   w-full relative pt-2.5 '>
         <span className=' text-[9px] sm:text-xs md:text-[14px] lg:text-3xl text-gray-800 inline-flex flex-col'>
             <span>
            &copy;outflencer
            </span>
            <span>all rights reservered 2025</span>
            </span>
         <a className="w-fit" href='https://www.instagram.com/ravemeetswave/'><img className='h-5 md:h-10 ' src='./instagram.svg'/></a>
    </div>
    </>
  )
}
 