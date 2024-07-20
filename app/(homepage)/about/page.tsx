import Image from 'next/image';
import React from 'react'
import tree from "@/images/tree.jpg"

type Props = {};
export default function About({}: Props){
  return (
    <div 
    className='flex flex-col  overflow-hidden
    relative 
    h-screen
    text-center
    md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center'
    

    >
        <h3 className='absolute lg:top-24
        md:top-14 top-7
        uppercase tracking-[20px]
         text-white text-2xl md:text-3xl lg:text-4xl'>
            About
         </h3>
         <Image
            src={tree}
            alt='tree'
            className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
         md:rounded-lg md:w-64px md:h-64px xl:w-[400px] xl:h-[500px]'
         />

         <div className=' space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold '>Here is a{' '}
                 <span className='underline decoration-[#84e0ff]'>
                 little
                 </span>{' '}
                 background
            </h4>
            <p className='text-base justify-center'>
                hello World 
            </p>
         </div>
    </div>
  )
}