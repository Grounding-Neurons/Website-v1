'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from 'react';

import gnLogoFull from '/public/assets/GroundingNeurons.png';

const NavBar = ({page} : {page:string}) => {

    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {setNav(!nav);}

    useEffect(() => {
        const handleScroll = () => {
          const scroll = window.scrollY;
          const isNavbarScrolled = scroll > 0;
          setIsScrolled(isNavbarScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []
    );

    return (
        <nav className={`top-0 left-0 h-20 w-full z-[999] absolute ${page!=='home' ? 'bg-orange-800' : 'bg-orange-800/75'}`}>
            {/* MOBILE */}


            {/* DESKTOP */}
            <div className='pt-2 flex font-quicksand text-white justify-between items-center font-semibold max-w-[1240px] m-auto p-1'>
                <ul className='flex items-center'>
                    <li className='pt-2 hover:brightness-95 transition-all'>
                        <Link href='/'>
                            <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={234} height={72}/>
                        </Link>
                    </li>
                </ul>
                <ul className='flex items-center justify-center'>
                    <li className='p-4'>
                        <Link href='/' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            Home
                        </Link>
                    </li>
                    <li className='flex items-center justify-center p-4'>
                        <Link href='/about' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            About Our Initiative
                        </Link>
                        <IoMdArrowDropdown/>
                    </li>
                    <li className='flex items-center p-4'>
                        <Link href='/contact' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='flex'>
                        <Link href='/donate' className={`px-4 py-2 ml-3 rounded-lg outline outline-red-400 bg-red-400/30 hover:brightness-90 transition-all relative`}>
                            Donate
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;