import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa';
import { IoDocumentText } from "react-icons/io5";


const About = () => {
  return (
    <div id='about' className='flex items-center justify-evenly md:h-[90vh] w-screen bg-white'>
      <div className='flex md:flex-row flex-col-reverse w-[70%] justify-between md:space-x-10'>
        <div className='md:w-[70%] w-[50%] relative mx-auto mt-4'>
            <img className='border-solid rounded-2xl border-5 ' src="pic2.jpeg" alt="picture" srcset="" />
            <div className='flex justify-evenly mt-4'>
              <Link href={'#contact'}>
                <div class="flex items-center justify-evenly space-x-2 md:h-10 md:w-[6rem] border-solid rounded-md border-2 border-[#555555] bg-[#555555] text-white ">
                  <FaCode /> 
                  <p>Hire Me</p>
                </div>
              </Link>

              <Link href={'https://drive.google.com/file/d/1j-WXv-OgUeOGwdyoO00rIPzGz5QYzweP/view?usp=sharing'} target='_blank'>
                <div class="flex items-center justify-evenly space-x-2 md:h-10 md:w-[6rem] border-solid rounded-md border-2 border-[#555555] bg-[#555555] text-white">
                  <IoDocumentText />
                  <p>Resume</p>
                </div>
              </Link>
            </div>
        </div>
        <div className='flex flex-col justify-evenly'>
          <p className='text-[#555555] text-lg md:text-xl font-semibold mt-4 md:-mb-6 italic'>Who I am</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold' >About /-</p>
          <p className='text-[#555555] text-2xl md:text-3xl font-bold'>Hi, I ' m a Frontend Developer 🚀 from Delhi, India.</p>
          <p className='text-[#555555] text-sm md:text-lg'>I am always eager to learn and explore new technologies, and stay up-to-date with the latest trends in web development 🚀. I specialize in using ReactJS, JavaScript, Redux, and NextJS to create beautiful and functional interfaces.</p>
          <p className='text-[#555555] text-sm md:text-lg'>In addition to my web development skills, I also have a keen eye for design and enjoy working with Final Cut Pro to bring my ideas and videos to life. When I'm not coding, you can find me exploring new Places and Travelling😉️.</p>
        </div>
      </div>
    </div>
  )
}

export default About
