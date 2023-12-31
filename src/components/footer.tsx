import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

import gnLogoFull from '/public/assets/GroundingNeurons.png';

const Footer = () => {
    return (
        <footer className='bottom-0 left-0 bg-[#f47356] text-black p-4'>
            <div className='p-4 flex flex-col md:flex-row items-center md:justify-center'>

                {/* GN LOGO & HACK CLUB DISCLAIMER */}
                <div className='p-2 md:w-96'>
                    <Link href='/'>
                        <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={256} height={256} />
                    </Link>
                    <div className='pt-4 text-sm font-mono tracking-tight brightness-50'>
                        <p>Grounding Neurons is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).</p>
                        <p className='pt-4 font-quicksand text-sm text-gray-900 font-medium'>Copyright © 2024 Grounding Neurons.</p>
                    </div>
                </div>

                {/* SITE MAP / LINK TABLE */}
                <div className='flex md:flex-none font-quicksand font-medium'>
                    <div className="py-4 px-2 md:pl-12">
                        <p className='tracking-wide brightness-95'>About Grounding Neurons</p>
                        <ul className='py-2 text-sm text-gray-900'>
                            <li className='p-[2px]'>
                                <Link href='/' className='hover:text-gray-600 transition-all'>
                                    Home
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/about' className='hover:text-gray-600 transition-all'>
                                    Our Mission
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/about#epilepsy' className='hover:text-gray-600 transition-all'>
                                    What is Epilepsy?
                                </Link>
                            </li>
                            <li className='p-[2px]'>
                                <Link href='/about#team' className='hover:text-gray-600 transition-all'>
                                    Grounding Neurons Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <div className='py-4 px-8'>
                            <p className='tracking-wide brightness-95'>Contact Us</p>
                            <ul className='py-2 text-sm text-gray-900'>
                                <li className='p-[2px]'>
                                    <Link href='/contact' className='hover:text-gray-600 transition-all'>
                                        Contact Form
                                    </Link>
                                </li>
                                <li className='p-[2px]'>
                                    <Link href='/contact#webmaster' className='hover:text-gray-600 transition-all'>
                                        Webmaster Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='px-8'>
                            <p className='tracking-wide brightness-95'>Support Us</p>
                            <ul className='py-2 text-sm text-gray-900'>
                                <li className='p-[2px]'>
                                    <Link href='/donate' className='hover:text-gray-600 transition-all'>
                                        Donate!
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className='flex flex-col py-4 pl-6 font-quicksand font-medium'>
                        <p>Follow us!</p>
                        <div className='flex pt-4'>
                            <Link className='px-2 block' href='https://twitter.com/groundneurons' target='_blank' rel='noopener noreferrer'>
                                <FaXTwitter size={24} className='invert'/>
                            </Link>
                            <Link className='px-2 block' href='https://www.instagram.com/groundingneurons' target='_blank' rel='noopener noreferrer'>
                                <FaInstagram size={24} className='invert'/>
                            </Link>
                            <Link className='px-2 block' href='https://www.linkedin.com/company/grounding-neurons' target='_blank' rel='noopener noreferrer'>
                                <FaLinkedinIn size={24} className='invert'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;