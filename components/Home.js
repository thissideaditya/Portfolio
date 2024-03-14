import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaCss3, FaHtml5, FaInstagram, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiUpwork } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import Connect from './Connect';


const Home = () => {
  return (
    <div className='flex flex-col items-center justify-evenly md:h-[90vh] w-screen bg-[#f9f9f9] space-y-10'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='flex flex-col justify-evenly space-y-4'>
          <p className='text-[#2d2e32] text-4xl md:text-6xl font-extrabold mt-4 mx-auto' >Front-End React Developer 👋</p>
          <p className='text-[#555555] text-sm md:text-lg'>Hi, I'm Aditya Chaurasia. A passionate Front-end React Developer based in Delhi, India. 📍</p>
          <div className="flex space-x-2 md:space-x-4 text-4xl mx-auto">
            {/* <Connect /> */}
            <Link href={"https://www.linkedin.com/in/thissideaditya/"} target="blank">
                <CiLinkedin className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://github.com/thissideaditya"} target="blank">
                <FiGithub className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://www.upwork.com/freelancers/~0134954ff49bb853b3"} target="blank">
                <SiUpwork className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://twitter.com/iameraditya"} target="blank">
                <FaXTwitter className="hover:scale-125 duration-300" />
            </Link>
            <Link href={"https://instagram.com/thissideaditya/"} target="blank">
                <FaInstagram className="hover:scale-125 duration-300" />
            </Link>
          </div>
        </div>
        <div className='w-[100%] md:w-[60%] relative mx-auto mt-4'>
          <img src="/IMG_2476.jpg" alt="picture" srcset="" />
          <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-full border-4 border-black animate-spin '></div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center md:space-x-8 space-y-4 md:space-y-0'>
        <div className='flex md:flex-row flex-col  text-lg md:text-xl text-[#555555]'>
          <p>Tech Stack</p>
          <p className='hidden md:block ml-4'>|</p>
          <p className='w-full h-0.5 bg-[#555555] md:hidden'></p>
        </div>
        <div className='flex flex-col md:flex-row text-5xl md:space-x-4 space-y-4 md:space-y-0 items-center'>
          <div className='flex space-x-4 mx-auto'>
            <FaHtml5 className='hover:animate-bounce'/>
            <FaCss3 className='hover:animate-bounce'/>
            <IoLogoJavascript className='hover:animate-bounce'/>
            <FaNodeJs className='hover:animate-bounce'/>
          </div>
          <div className='flex space-x-4'>
            <FaJava className='hover:animate-bounce'/>
            <FaReact className='hover:animate-bounce'/>
            <TbBrandNextjs className='hover:animate-bounce' />
            <SiChakraui className='hover:animate-bounce'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
