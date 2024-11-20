"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
 import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    


      <section className="text-gray-600 body-font bg-blue-300">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                I am ,
              <br className="hidden lg:inline-block" />
              
              <Typewriter
  options={{
    strings: [
      'Tayyaba',
      'Programmer',
      'Web Developer',
      'Student',
      ],
    autoStart: true,
    loop: true,
  }}
/>
            </h1>

            <div className='w-[100px] h-[2px] bg-blue-700'></div>
            <p className="mb-8 leading-relaxed">
            I am an aspiring web developer with a strong foundation in HTML, CSS, JavaScript, and TypeScript. I am continually expanding my skill set and am currently focusing on building projects with React and Next.js. Passionate about crafting responsive, user-friendly websites and applications, I am eager to bring innovative ideas to life and grow my expertise in front-end development.
            </p>
            <div className="flex justify-center">
              <Link href= {"#Contact"}>
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Contact</button>
               </Link> 
              
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image className="object-cover object-center rounded mx-auto w-[15rem]"
            src= {require("../../public/assets/hero.jpg")}
             alt="hero"
            width={500}
            height={500}
              />
          </div>
        </div>
      </section>
    
    
  )
}

export default Hero