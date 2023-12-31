import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import Image from 'next/image';
import SocialSideBar from '@/components/socialsidebar';
import ContactForm from '@/components/contactform';
import { LuMail } from "react-icons/lu";

import background from '../../../public/assets/backgrounds/bgcontact.jpg';
import Link from 'next/link';

export default function Contact() {
    return (
        <main className='bg-white'>
            <NavBar page='contact'/>
            <SocialSideBar page='contact'/>

            {/* HERO */}
            <div id='triggerElement' className='pt-20 flex relative justify-center items-center h-[35vh]'>
                <Image src={background} fill={true} priority={true} quality={100} alt='' className='z-0 object-cover object-center'/>
                <div className='absolute z-1'>
                    <p className='font-librecaslontext text-white text-4xl underlineunderline-offset-[14px] slide-animation-short'>Contact Grounding Neurons</p>
                </div>
            </div>

            {/* SECTION 1 - GENERAL CONTACT FORM */}
            <div id='contact'>
                <ContactForm/>
            </div>

            {/* SECTION 2 - WEBMASTER CONTACT */}
            <div id='webmaster' className='flex flex-col pb-32 pt-4 justify-center items-center'>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='flex flex-col py-12 justify-center items-center'>
                    <p className='font-librecaslontext text-red-800 text-4xl'>Webmaster Contact</p>
                </div>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='pt-16 text-center max-w-[1080px]'>
                    <p className='font-librecaslontext text-gray-600 text-xl'>For any questions, concerns, or reports about the Grounding Neurons website, including any potential vulnerabilites or broken content, please contact the Webmaster at the email below:</p>
                    <div className='pt-12'>
                        <button className='rounded-md bg-orange-800 px-3.5 py-2.5 text-center text-sm hover:bg-orange-700 transition-all'>
                            <Link href={'mailto:webmaster@groundingneurons.org'} className='flex items-center'>
                                <LuMail color='white' size='22'/>
                                <span className='pl-2 text-white font-semibold font-inter'>Contact Webmaster</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    );
};