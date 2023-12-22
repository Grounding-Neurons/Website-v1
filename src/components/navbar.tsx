'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useEffect, useState } from 'react';

import gnLogoFull from '/public/assets/GroundingNeurons.png';

const NavBar = () => {
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
        <nav className={`top-0 left-0 w-full z-[999] fixed bg-orange-800 ${isScrolled ? 'backdrop-blur-[10px]' : ''} ${nav ? 'bg-zinc-900 md:bg-transparent transition-all' : 'transition-all'}`}>
            <div className='md:flex text-white font-quicksand justify-between items-center font-semibold max-w-[1240px] m-auto p-1'>
                <ul className='flex items-center'>
                    <li className='pt-2 hover:brightness-95 transition-all'>
                        <Link href='/'>
                            <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={216} height={64}/>
                        </Link>
                    </li>
                </ul>
                <ul className='flex'>
                    <li className='p-4'>
                        <Link href='/' className={`group hover:brightness-90 relative hover-underline-animation`}>
                            Home
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/skills-experience' className={`group hover:brightness-90 relative hover-underline-animation`}>
                            About
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/projects' className={`group hover:brightness-90 relative hover-underline-animation`}>
                            Contact
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' className={`group hover:brightness-90 relative hover-underline-animation`}>
                            Our Goals
                        </Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/contact' className={`group hover:brightness-90 relative hover-underline-animation`}>
                            Donate
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;