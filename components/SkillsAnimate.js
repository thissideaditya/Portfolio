import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";

function SkillsAnimate({iconSize}) {
  return (
    <div className=' overflow-x-hidden w-[80vw]'>
      <div className='pDiv flex items-center justify-center'>
            <div className={`transDiv flex mx-auto`}>
              <FaHtml5 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaCss3 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <IoLogoJavascript className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaNodeJs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaJava className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaReact className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <TbBrandNextjs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`} />
              <SiChakraui className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
            </div>
            <div className={`transDiv flex mx-auto`}>
              <FaHtml5 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaCss3 className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <IoLogoJavascript className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaNodeJs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaJava className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <FaReact className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
              <TbBrandNextjs className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`} />
              <SiChakraui className={`hover:scale-110 duration-300 md:mx-2 mx-1 ${iconSize}`}/>
            </div>
      </div>
    </div>
  )
}

export default SkillsAnimate
