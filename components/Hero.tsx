
"use client" 
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import Lottie from "lottie-react";
import hi from "../data/hi.json";

const Hero = () => {
  return (
    <>
    <div className="pb-20 pt-36">
        <div>
         <Spotlight className= "-top-40 -left-10 md:-left-32 md:-top-20 h-screen "fill="purple" />
         <Spotlight className= "-top-50 -right-80 h-screen translate-x- transform rotate-180  w-[100vw]"fill="white" />
         <Spotlight className= "-top-28 -left-80 h-screen w-[100vw] "fill="blue" />

         </div>

         <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0"> 
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col items-center justify-center"> 
        <h2 className=' flex justify-start uppercase tracking-widest text-5XL text-center text-blue-100 max-w-80 '><Lottie className='w-6' animationData={hi} loop={true} />  Hello, my name is Alhantwi </h2> 
        {/* <p className="text-xl text-center sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Hi, my name is Alhantwi
      </p> */}
        <TextGenerateEffect
            words="Creating Seamless, User-Centric Web Solutions for a Connected World"
            className="text-center text-[40px] md:text-2xl lg:text-4xl"
          />
            <p>front-end developer , back-end developer, and UI/UX designer</p>
          <a href="#about">

            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Hero