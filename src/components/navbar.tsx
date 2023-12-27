'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
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
        <nav className={`top-0 left-0 w-full z-[999] fixed ${page!=='home' ? 'bg-orange-800' : 'bg-orange-800/75'} ${isScrolled ? 'backdrop-blur-[10px]' : 'h-20 transition-all'} ${nav ? 'bg-zinc-900 md:bg-transparent transition-all' : 'transition-all'}`}>
            <div className={`${isScrolled ? '' : 'pt-2 transition-all'} flex font-quicksand text-white justify-between items-center font-semibold max-w-[1240px] m-auto p-1`}>
                <ul className='flex items-center'>
                    <li className='pt-2 hover:brightness-95 transition-all'>
                        <Link href='/'>
                            <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={234} height={72}/>
                        </Link>
                    </li>
                </ul>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            Home
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/about' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            About Us
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            Contact
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/donate' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                            Donate
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;