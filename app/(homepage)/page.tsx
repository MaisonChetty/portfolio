'use client'
import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from '@/components/BackgroundCircles';
import tree from "@/images/tree2.jpg"
import Image from 'next/image';

type Props = {}

function Hero() {
    const [text, count]= useTypewriter({
        words: ['Hi, The Names is Kiara',
            'Girl who loves to create'],
        loop: true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen
    flex 
    flex-col 
    space-y-8 
    items-center 
    justify-center
    text-center
    overflow-hidden
    scroll-smooth'>
        <BackgroundCircles />
        <Image 
        className='relative rounded-full h-32 w-32 md:h-52 md:w-52 mx-auto object-cover'
        src={tree}
        alt="tree" />
        <div className='z-20'>
            <h2 className='lg:text-xl
            text-sm 
            uppercase 
            text-gray-500 
            pb-2 
            tracking-[15px]'>Game Designer</h2>
            <h1 className='text-5xl 
            lg:text-6xl 
            font-semibold 
            px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='lightblue'/>
            </h1>
        </div>
    </div>
  )
}

export default Hero