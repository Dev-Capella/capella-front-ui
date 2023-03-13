'use client'
import React, { useState,useRef,useEffect } from 'react'
import Shoe from "../../public/assets/images/deneme.png"
import  btn from "../../public/assets/images/aa.jpeg";
import  de from "../../public/assets/images/logo-black.png";
import "./banner.css";
import Image from 'next/image'
import dynamic from 'next/dynamic';
const Slider = dynamic(() => import('react-slick'), { ssr: false });

function banner() {
    const [value, setValue] = useState(1);

    const settings = {
        customPaging: function(i:number) {
          
          return (
            <a >
             <Image  className='w-[50px] h-[50px]'  src={product[i].src} alt="" onClick={() => setValue(i)} />
            </a>
          );
        },  
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    const product = [
        {
            id:0,
            title:"Apple",
            desc:"Ömer götten yemeyi sever",
            text:"See All Items",
            bg:'bg-orange-500',
            src:Shoe,
        },
        {
            id:1,
            title:"Samsung",
            desc:"Mahmut götten yemeyi sever",
            text:"See All Items",
            bg:'bg-orange-500',
            src:btn,
        },
        {
            id:2,
            title:"Zamsung çöptür lo",
            desc:"Ömer akbank istifa",
            text:"See All Items",
            bg:'bg-orange-500',
            src:btn,
        },
        {
            id:3,
            title:"Ronaldoooooo",
            desc:"Hiçbir şey olmasa bile bir şeyler oldu.",
            text:"See All Items",
            bg:'bg-orange-500',
            src:btn,
        },
        

    ]
  
  return (
    <>
    <div className='w-full h-[500px] bg-[#c9e70f] flex justify-center items-center'>
        <div className='flex-1 flex justify-center items-center'>
          <div className='w-5/6 h-auto my-2'>
            <p className='text-md font-semibold my-3'>{product[value].title} </p>
            <p className='text-5xl font-semibold my-4'> {product[value].desc}</p>
            <button className='bg-white text-black text-xl rounded-2xl p-2 my-5'>{product[value].text}</button>
          </div>
        </div>
        <div className='flex-1'>
       
         <div className='w-full h-10 flex justify-center items-center mt-2'>
         <Slider className='max-w-[500px]' {...settings}>
            {
                product.map((item,i)=> (
                   <div key={i} >
                    <Image  className='w-[500px] h-[350px]' src={item.src} alt="" onMouseEnter={() => setValue(item.id)} />
                  </div>
                ))
            }
        </Slider>
         </div> 
        </div>  
    </div>
    </>
    
  )
}

export default banner