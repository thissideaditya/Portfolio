import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#f9f9f9] h-[90vh] w-screen flex flex-col items-center justify-evenly'>
      <div className='flex flex-col justify-evenly w-[70%]'>
          <p className='text-[#555555] text-xl font-semibold italic'>Who I can do</p>
          <p className='text-[#2d2e32] text-4xl font-extrabold' >Services</p>
          <p className='text-[#555555] text-lg'>Are you looking to establish a strong online presence for your business or showcase your work through a stunning personal website? Look no further! As a passionate web developer, I specialize in crafting high-quality, bespoke websites that leave a lasting impression.</p>
          <p className='text-[#2d2e32] text-2xl font-bold' >What I Offer</p>
      </div>

      <div className='grid grid-rows-2 grid-cols-3 w-[65%]'>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>Custom Website Design</p>
          <p className='text-[#555555] text-base'>Visually engaging websites reflecting your brand and user-focused experience.</p>
        </div>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>Responsive Development</p>
          <p className='text-[#555555] text-base'>
          Websites that adapt seamlessly to all devices for optimal user experience.
          </p>
        </div>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>Cutting-edge Tech</p>
          <p className='text-[#555555] text-base'>
          Dynamic websites with ReactJS, Next.js & modern front-end tools.
          </p>
        </div>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>Performance Optimization</p>
          <p className='text-[#555555] text-base'>
          Lightning-fast performance optimized websites for quick loading and user engagement.
          </p>
        </div>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>SEO-friendly Development</p>
          <p className='text-[#555555] text-base'>
          Boost online visibility with search engine friendly websites.
          </p>
        </div>
        <div className='m-2 hover:scale-105 duration-300'>
          <p className='text-[#2d2e32] text-lg font-bold'>Ongoing Support</p>
          <p className='text-[#555555] text-base'>
          Ensure optimal website performance beyond deployment.
          </p>
        </div>
      </div>
      <div className='w-[70%]'>
        <p className='text-[#2d2e32] text-lg font-bold mb-2'>Why Choose Me?</p>
        <p className='text-[#555555] text-base'>I'm not just a developer, I'm your online journey partner. Through close collaboration, I understand your vision, goals, and audience. Together, we'll create a unique website that reflects your business objectives and sets you apart.</p>
        <p className='text-[#555555] text-base font-bold mt-2'>Reach out to me, and let's bring your ideas to life!</p>
      </div>
    </div>
  )
}

export default Services
