import Link from 'next/link'

import React from 'react'
import { CiLinkedin, CiMail } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiGithub } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

const Contact = () => {
  
  return (
    <div id='contact' className='bg-[#f9f9f9] w-screen h-[50vh] flex items-center justify-evenly'>
      <div className='w-[70%]'>
        <div className='w-[70%]'>
          <p className='text-[#555555] text-xl font-semibold italic'>Hire Me</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold'>Get in touch</p>
        </div>
        <div className='flex w-[100%] justify-between'>
          <p className='w-[70%] text-[#555555] text-lg'>I'm interested in freelance opportunities - especially ambitious or large projects. However, if you have other request or question, don't hesitate to contact.</p>
          <div>
            <p className='text-[#2d2e32] text-lg font-bold'>SAY HELLO</p>
            <div className='flex justify-between space-x-4'>
              <p className='text-[#555555]'>Mail to me at :</p>
              <CiMail className='text-2xl hover:scale-125 duration-300' />
            </div>
          </div>
        </div>
        <div className='w-[70%] mx-auto flex flex-col items-center mt-8'>
          <div className='flex text-4xl space-x-4'>
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
          <p className='text-[#2d2e32] mt-4 font-mono'>Built with ❤️ by Aditya Chaurasia</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
