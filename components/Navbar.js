import Link from "next/link";
// import { useState } from "react";


export default function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleMenu = () => {
  //   setIsOpen(!isOpen)
  // }

  const navList = [
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ]
  return(
    <div className='flex flex-col sm:flex-row w-full h-[12vh] justify-center sm:justify-between items-center bg-white drop-shadow-sm' >
      <Link href={'/'}>
        <p className="sm:ml-[50%] font-[Papyrus] font-extrabold text-center sm:text-left text-3xl" >aditya.dev</p>
      </Link>
      <ul className="flex list-none space-x-2 sm:pr-10 justify-center sm:justify-normal" >
        {navList.map((item, index) => {
          return(
            <Link href={item.link}>
              <li className="sm:text-base font-semibold text-sm hover:scale-105 duration-300">{item.name}</li>
            </Link>
          )
        }) }
      </ul>

      {/* <button onClick={handleMenu}>
        {navList.map((item, index) => {
          return(
            <Link href={item.link}>
              <span className="sm:text-base font-semibold text-sm hover:scale-105 duration-300">{item.name}</span>
            </Link>
          )
        })}
      </button> */}
    </div>
  );
}