import React from 'react'
import Heading from './Heading';
import Card from './Card';
import Image from 'next/image';

const data = [
    {
      id:0,
      title:"Figma design",
      desc: "A basic design in figma with Next.js.likely focusing on a clean and functional layout.It showcases   essential UI elements.",
      img: "/assets/figma1.png",
      tags:["Next.js", "Node", "CSS","Typescript"],
    },
    {
      id:1,
      title:"Website design",
      desc: "A responsive Hero section using Next.js,complete with a header and footer for seamless navigation.This section highlights a strong visual layout.",
       img: "/assets/KmWeb.png",
       tags:["Next.js", "Node", "CSS", "Typescript"],
     },
     {
      id:2,
      title:"card with Tailwind",
      desc: "A card is a sleek and responsive UI element designed using Tailwind CSS, featuring clean styling and a modern layout.",
      img: "/assets/card.png",
      tags:["HTML", "Node", "CSS", "Tailwind"],
      },
      {
        id:3,
        title: "Grid Layout",
         desc: "A clean responsive grid layout built with Next.js and Tailwind CSS,perfect for organizing content  in a visually structured.",
          img: "/assets/gridLayout.png",
          tags: ["Next.js", "Node", "Tailwind","CSS"],
        },
      ];




const Projects = () => {
  return (
    <div id='projects' className='container pt-32 bg-blue-300'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center '>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects