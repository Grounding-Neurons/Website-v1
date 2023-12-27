'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const SocialSideBar = () => {
    
    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {setNav(!nav);}

    useEffect(() => {
        const handleScroll = () => {
          const scroll = window.scrollY;
          const isNavbarScrolled = scroll > 1000;
          setIsScrolled(isNavbarScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []
    );

    return (
        <div className={`z-[998] pt-64 flex flex-col fixed items-end w-full`}>
            <div className={`px-3 py-2 rounded-tl-lg rounded-bl-lg ${isScrolled ? 'bg-slate-400' : ''} transition-all`}>
                <Link className='py-2 block' href='https://twitter.com/groundneurons' target='_blank' rel='noopener noreferrer'>
                    <FaXTwitter size={24} className='invert'/>
                </Link>
                <Link className='py-2 block' href='https://www.instagram.com/groundingneurons' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={24} className='invert'/>
                </Link>
                <Link className='py-2 block' href='https://www.linkedin.com/company/grounding-neurons' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn size={24} className='invert'/>
                </Link>
                <Link className='py-2 block' href='https://twitter.com/groundneurons' target='_blank' rel='noopener noreferrer'>
                    <FaYoutube size={24} className='invert'/>
                </Link>
            </div>
        </div>
    );
};

export default SocialSideBar;