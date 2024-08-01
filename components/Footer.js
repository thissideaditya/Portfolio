import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";


export default function Footer() {
    return(
        <div className="bg-[#2d2e32] flex flex-col sm:flex-row justify-center sm:justify-evenly h-[20vh] items-center w-full">
            <div className="text-white font-extrabold" >Copyright © 2024. All rights are reserved</div>
            <div className="flex text-white space-x-4 text-2xl">
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
    )
}