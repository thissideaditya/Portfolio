import Link from 'next/link'
import React from 'react'

const Projects = () => {
  const projectList = [
    {projectName: "Funfly", projectData: "This project is a Short Video Sharing Platform with comment and follow features.", techStack: ["NextJS", "Firebase"], link: "https://github.com/thissideaditya/funfly"},
    {projectName: "ToDO App", projectData: "This project is a Todo app to get user's tasks lists with simple and user-friendly UI.", techStack: ["HTML", "CSS", "JS"], link: "https://thissideaditya.github.io/ToDO-App/"},
    {projectName: "WebCam", projectData: "This is a basic webcam which also has a gallery with features to download and delete your media.", techStack: ["JS", "indexedDB"], link: "https://thissideaditya.github.io/webcam/"},
    {projectName: "ESPN Scrapper", projectData: "This project is a web scraping project which scrapes players data from ESPN.", techStack: ["HTML", "JS", "NodeJS"], link: "https://github.com/thissideaditya/ESPN_Scrapper"},
    {projectName: "File Organiser", projectData: "This project organises your file structure from terminal.", techStack: ["Terminal", "JS", "NodeJS"], link: "https://github.com/thissideaditya/File-Organiser"},
    {projectName: "Coming Soon", projectData: "This project will come soon", techStack: [], link: "#projects"}
  ]
  return (
    <div id='projects' className='bg-white h-full pt-4 w-screen flex flex-col items-center justify-evenly'>
      <div className='flex flex-col justify-evenly w-[70%]'>
          <p className='text-[#555555] text-lg md:text-xl font-semibold italic'>I build real value</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold' >Projects</p>
      </div>

      <div className='md:grid md:grid-rows-2 md:grid-cols-3 w-[65%]'>
          {
            projectList.map((item, index) => {
              return(
                <Link href={item.link} target='blank'>
                  <div key={index} className='m-4 hover:scale-105 duration-300 border-2 rounded-lg'>
                    <p className='text-[#2d2e32] text-lg font-bold ml-1'>{item.projectName}</p>
                    <p className='w-[30%] md:w-[50%] h-0.5 bg-[#555555] ml-1'></p>
                    <p className='text-[#555555] text-base ml-1'>{item.projectData}</p>
                    <div className='flex justify-around items-center'>
                      {Array.isArray(item.techStack) && item.techStack.length > 0 && (
                        item.techStack.map((tech, index) => {
                          return(
                            <div key={index} className="flex items-center justify-center h-6 w-[4.5rem] text-sm border-solid rounded-md border-2 border-[#555555] bg-[#555555] text-white mb-2">
                              <p className='mx-auto'>{tech}</p>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </div>
                </Link>
              )
            })
          }
      </div>
    </div>
  )
}

export default Projects
