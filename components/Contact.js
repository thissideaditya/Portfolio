import Link from 'next/link'

import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

const Contact = () => {
  
  return (
    <div id='contact' className='bg-[#f9f9f9] pt-4 w-screen h-full md:h-[50vh] flex items-center justify-evenly'>
      <div className='md:w-[70%] w-[90%]'>
        <div className='md:w-[70%] w-full'>
          <p className='text-[#555555] text-xl font-semibold italic'>Hire Me</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold'>Get in touch</p>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <p className='md:w-[70%] mb-4 w-full text-[#555555] text-sm md:text-lg'>I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact.</p>
          <div>
            <p className='text-[#2d2e32] text-lg font-bold'>SAY HELLO</p>
            <div className='flex md:justify-between space-x-4'>
              <p className='text-[#555555]'>Mail to me at :</p>
              <CiMail className='text-2xl hover:scale-125 duration-300' />
            </div>
          </div>
        </div>
        <div className='md:w-[70%] w-full mx-auto flex flex-col items-center m-4 md:mt-8'>
          <div className='flex text-3xl md:text-4xl space-x-4'>
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
          <p className='text-[#2d2e32] md:mt-4 text-sm font-mono'>Built with ❤️ by Aditya Chaurasia</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
