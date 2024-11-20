
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbBrandInstagram } from "react-icons/tb";
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="bg-blue-100">

      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          
          <Image className="w-[50px]" src={"/logo.jpg"} alt="logo" width={100} height={100}
          
          />
            <span className="ml-3 text-xl">Tayyaba</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tayyaba —
            
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-blue-700">
            <BsFacebook />
            </a>
            <a className="ml-3 text-black">
            <AiFillTwitterCircle className="h-5 w-5"/>
            </a>
            <a className="ml-3 text-pink-700">
            <TbBrandInstagram className="h-5 w-5" />
            </a>
            <a className="ml-3 text-gray-500">
              
            </a>
          </span>
        </div>
      </footer>
    
    </div>
  )
}

export default Footer