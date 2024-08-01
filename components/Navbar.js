import Link from "next/link";


export default function Navbar() {

  const navList = [
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' }
  ]
  return(
    <div className='flex flex-col sm:flex-row w-full h-[12vh] justify-center sm:justify-between items-center bg-black drop-shadow-sm' >
      <Link href={'/'}>
        <p className="hover:scale-125 duration-300 sm:ml-[50%] font-[Papyrus] text-white font-extrabold text-center sm:text-left text-3xl" >aditya.dev</p>
      </Link>
      <ul className="flex list-none space-x-8 sm:pr-10 justify-center sm:justify-normal text-white" >
        {navList.map((item, index) => {
          return(
            <Link href={item.link} className="scroll-smooth">
              <li className="sm:text-base font-semibold text-sm hover:scale-125 duration-300">{item.name}</li>
            </Link>
          )
        }) }
      </ul>
    </div>
  );
}