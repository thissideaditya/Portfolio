import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

function SkillsAnimate() {
  return (
    <div className='pDiv flex justify-center items-center '>
          <div className='transDiv flex space-x-4 mx-auto '>
            <FaHtml5 className='hover:scale-110 duration-300 '/>
            <FaCss3 className='hover:scale-110 duration-300'/>
            <IoLogoJavascript className='hover:scale-110 duration-300'/>
            <FaNodeJs className='hover:scale-110 duration-300'/>
            <FaJava className='hover:scale-110 duration-300'/>
            <FaReact className='hover:scale-110 duration-300'/>
            <TbBrandNextjs className='hover:scale-110 duration-300' />
            <SiChakraui className='hover:scale-110 duration-300'/>
          </div>
          <div className='transDiv flex space-x-4 mx-auto '>
            <FaHtml5 className='hover:scale-110 duration-300'/>
            <FaCss3 className='hover:scale-110 duration-300'/>
            <IoLogoJavascript className='hover:scale-110 duration-300'/>
            <FaNodeJs className='hover:scale-110 duration-300'/>
            <FaJava className='hover:scale-110 duration-300'/>
            <FaReact className='hover:scale-110 duration-300'/>
            <TbBrandNextjs className='hover:scale-110 duration-300' />
            <SiChakraui className='hover:scale-110 duration-300'/>
          </div>
    </div>
  )
}

export default SkillsAnimate
