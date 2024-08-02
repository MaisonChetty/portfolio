'use client'
import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from '@/components/BackgroundCircles';
import image1 from "@/images/image1.jpeg"
import Image from 'next/image';

type Props = {}

function Hero() {
    const [text, count]= useTypewriter({
        words: ['I am, Maison Chetty',
            'Programming is what I Live for'],
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
        className='relative rounded-full h-32 w-32 md:h-64 md:w-64 mx-auto object-cover'
        src={image1}
        height={900}
        width={900}
        alt="Profile" />
        <div className='z-20'>
            <h2 className='lg:text-xl
            text-sm 
            uppercase 
            text-gray-500 
            pb-2 
            tracking-[15px]'>Web Developer</h2>
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

export default Hero;