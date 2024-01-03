'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const SocialSideBar = ({page} : {page:string}) => {

    const [isPastElement, setIsPastElement] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerElement = document.getElementById('triggerElement');

            if (triggerElement) {
                const triggerElementBottom = triggerElement.getBoundingClientRect().bottom;
                setIsPastElement(scrollY > triggerElementBottom);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []
    );

    return (
        <div className={`z-[998] mt-[15vh] flex flex-col absolute sm:fixed items-end w-full pointer-events-none`}>
            <div className={`px-3 py-2 rounded-tl-lg rounded-bl-lg ${isPastElement ? 'sm:bg-[#f47356]' : ''} transition-all pointer-events-auto`}>
                <Link className='py-2 block' href='https://twitter.com/groundneurons' target='_blank' rel='noopener noreferrer'>
                    <FaXTwitter size={24} className='invert'/>
                </Link>
                <Link className='py-2 block' href='https://www.instagram.com/groundingneurons' target='_blank' rel='noopener noreferrer'>
                    <FaInstagram size={24} className='invert'/>
                </Link>
                <Link className='py-2 block' href='https://www.linkedin.com/company/grounding-neurons' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn size={24} className='invert'/>
                </Link>
            </div>
        </div>
    );
};

export default SocialSideBar;