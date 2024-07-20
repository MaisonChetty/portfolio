import React from 'react'
import { motion } from 'framer-motion'
import tree from "@/images/tree2.jpg"
import Image from 'next/image'

type Props = {}

const ExperienceCards = (props: Props) => {
  return (
    <article
    className='flex 
    flex-col 
    rounded-l 
    items-center 
    space-y-7 
    flex-shrink-0 
    w-[400px] 
    md:w-[600px] 
    xl:w-[600px] 
    snap-center 
    p-10 
    bg-[#292929]
    hover:opacity-100 
    opacity-40 
    cursor-pointer 
    transition-opacity 
    duration-200 
    overflow-hidden'
    >
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        whileInView={{
            opacity:1,
            y:0,
        }}
        transition={{
            duration:1.2,
        }}
        viewport={{
            once:true,
        }}
        className=" w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover object-center"
        src='https://t3.ftcdn.net/jpg/06/35/48/24/360_F_635482467_ZslqjoobsB7KnxC25hT2Z4cNsHjQUjAU.jpg'
        alt=''/>

        <div className='px-0 md:px-10 '>
            <h4 className='text-4xl font-light'>
                Ceo of the world
            </h4>
            <p className='font-bold text-2xl mt-1 '>
                Woods
            </p>
            <div className=' flex space-x-2 my-2'>
                <Image 
                className='h-10 w-10 rounded-full'
                src={tree}
                alt="" />
                <Image 
                className='h-10 w-10 rounded-full'
                src={tree}
                alt="" />
                <Image 
                className='h-10 w-10 rounded-full'
                src={tree}
                alt="" />
            </div>
            <p className='uppercase py-5 text-gray-300'>
                started work ...- Ended...
            </p>

            <ul className=' list-disc space-y-4 ml-5 text-lg'>
                <li>summary point
                </li>
                <li>summary point
                </li>
                <li>summary point
                </li>
                <li>summary point
                </li>
                <li>summary point
                </li>

            </ul>
        </div>
    </article>
  )
}

export default ExperienceCards