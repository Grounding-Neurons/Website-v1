import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import gnLogoFull from '/public/assets/GroundingNeurons.png';

const Footer = () => {
    return (
        <footer className='bg-[#f47356] text-black p-4'>
            <div className='flex md:flex-row items-center md:justify-center'>

                {/* GN LOGO & HACK CLUB DISCLAIMER */}
                <div className='p-2 md:w-96'>
                    <div className=''>
                        <Link href='/'>
                            <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={256} height={256}/>
                        </Link>
                        <div className='pt-4 text-sm font-mono tracking-tight brightness-50'>
                            <p>Grounding Neurons is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
                        </div>
                    </div>
                    <p className='hidden md:flex w-[300px] md:w-auto leading-relaxed md:text-sm pt-3 md:py-3 brightness-90'>{}</p>
                </div>

                {/* SITE MAP / LINK TABLE */}
                <div className='flex md:flex-none'>
                    <div className="py-4 px-2 md:pl-12">
                        <p className='tracking-wide brightness-95'>About Grounding Neurons</p>
                        <ul className='py-2 text-sm brightness-[.6]'>
                            <li className='p-[2px]'>
                                <Link href='/' className='group hover:brightness-90'>
                                    Home
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/skills-experience#about' className='group hover:brightness-90'>
                                    About Me
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/skills-experience#exp' className='group hover:brightness-90'>
                                    Skills/Experience
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/projects' className='group hover:brightness-90'>
                                    Projects
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='py-4 px-2'>
                        <p className='tracking-wide brightness-95'>Contact</p>
                        <ul className='py-2 text-sm brightness-[.6]'>
                            <li className='p-[2px]'>
                                <Link href='/contact' className='group hover:brightness-90'>
                                    Contact Me
                                    <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity'>_</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* SOCIAL MEDIA */}
                <div>
                    <p>Follow us!</p>
                    <div className='flex'>
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
            </div>
        </footer>
    );
};

export default Footer;