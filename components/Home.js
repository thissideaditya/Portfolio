import Link from 'next/link'
import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from 'react-icons/fa';
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import TypeWriter from './TypeWriter';


const Home = () => { 
  return (
    <div className='flex flex-col items-center justify-evenly md:h-[90vh] h-[90vh] w-screen bg-black space-y-10'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='flex flex-col justify-evenly space-y-4'>
          <p className='text-white text-4xl md:text-6xl font-extrabold mt-4 mx-auto' >Front-End React Developer 👋</p>
          <p className='text-white text-sm md:text-lg'>
            <TypeWriter className='services-font-t' text="Hi, I'm Aditya Chaurasia. A passionate Front-End React Developer based in Delhi, India. 📍" delay={100} />
          </p>
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
        <div className='w-[80%] md:w-[60%] relative mx-auto mt-[-4rem] hover:scale-110 duration-300'>
          <div className=' rounded-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-full border-4 border-white animate-spin md:hidden xl:block'></div>
            <div className='absolute top-0 left-0 w-[101%] h-[101%] rounded-full border-4 border-white animate-spin md:hidden xl:block'></div>
            <img className='' src="/homePic.jpg" alt="picture" srcset="" />
            <div className='absolute top-[-0.25rem] left-1 w-[100%] h-[100%] rounded-full border-4 border-white animate-spin md:hidden xl:block'></div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
