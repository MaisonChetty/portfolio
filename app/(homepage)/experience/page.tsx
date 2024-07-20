'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCards from '@/components/ExperienceCards'

type Props = {}

const Experience = (props: Props) => {
  return (
    <motion.div 
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1.5,
    }}
    className='h-screen
    flex
    relative
    overflow-hidden
    flex-col
    text-left
    md:flex-row
    max-w-full
    px-10
    justify-evenly
    mx-auto
    items-center'>
        <h3 className='
        absolute
        lg:top-16
        md:top-12 
        top-7
        uppercase
        tracking-[20px]
        text-gray-500
        text-2xl' >
            Experience
         </h3>

         <div className=' w-full flex spce-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
            <ExperienceCards />
            
         </div>
    </motion.div>
  )
}

export default Experience