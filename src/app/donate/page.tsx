import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import SocialSideBar from '@/components/socialsidebar';
import { FaExternalLinkAlt } from 'react-icons/fa';

import background from '/public/assets/backgrounds/bgdonate.jpg';
import hcbLogo from '/public/assets/icons/hcb-icon-icon-original.svg';

export default function Donate() {
    return (
        <main className='bg-[#f9fafc]'>
            <NavBar page='donate'/>
            <SocialSideBar page='donate'/>

            {/* HERO */}
            <div id='triggerElement' className='pt-20 flex relative justify-center items-center h-[35vh]'>
                <Image src={background} fill={true} priority={true} quality={100} alt='' className='z-0 object-cover object-center'/>
                <div className='absolute z-1 flex justify-center items-center'>
                    <p className='font-librecaslontext text-white text-3xl max-w-72 sm:max-w-none sm:text-4xl slide-animation-short text-center'>Support Our Initiative</p>
                </div>
            </div>

            {/* SECTION 1 - MISSION STATEMENT */}
            <div id='donateInfo' className='py-8 pb-16 sm:py-24 flex justify-center'>
                <div className='flex flex-col sm:flex-row justify-center items-center font-librecaslontext max-w-[1280px]'>
                    <div className='px-8 sm:px-16 max-w-[1080px] tracking- flex flex-col justify-between items-center sm:items-baseline text-center text-pretty sm:text-wrap'>
                        <div className='flex py-8 sm:pt-0 sm:pb-10 text-2xl sm:text-3xl text-red-600'>
                            <h1 className='slide-animation-medium'>We strive to reduce healthcare disparities in epilepsy to the fullest extent possible.</h1>
                        </div>
                        <div className='text-base sm:text-lg'>
                            <p>
                                All donations will be distributed to the African division of the International League Against Epilepsy (ILAE-Africa).
                            </p>
                            <p className='pt-8 pb-2'>
                                We are collaborating with ILAE-Africa to improve access to epilepsy care, combat stigma and low community awareness of epilepsy, and to facilitate educational programs and training for healthcare professionals and researchers in the field of epilepsy.
                            </p>
                            <p className='flex items-center justify-center pt-4 text-black font-medium text-base sm:text-lg hover:brightness-90'>
                                <Link href='https://www.ilae.org/regions-and-countries/regions/ilae-africa' className='pr-[10px]' target='_blank' rel='noopener noreferrer'><u>About ILAE-Africa</u></Link>
                                <FaExternalLinkAlt color='gray'/>
                            </p>
                        </div>
                        <div className='flex w-full justify-center pt-16 sm:pt-24 pb-8 text-2xl sm:text-3xl relative'>
                            <h1 className='slide-animation-medium text-transparent bg-clip-text bg-gradient-to-br from-amber-500 to-amber-600'>Thank you.</h1>
                        </div>
                        <div className='flex flex-col text-center items-center sm:items-baseline text-base sm:text-lg'>
                            <p>
                                Success in this endeavor depends on individuals like you, whose contributions will create a meaningful impact. Even a donation of just one dollar would validate and make our efforts worthwhile.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3 - POWERED BY HCB */}
            <div className='flex flex-col justify-center items-center py-8 px-4'>
                <Link href='https://hackclub.com/hcb' target='_blank' rel='noopener noreferrer'>
                    <Image src={hcbLogo} height={64} width={64} alt='HCB Logo'/>
                </Link>
                <p className='pt-4 font-inter font-semibold text-base sm:text-lg text-gray-900 text-center sm:text-left underline underline-offset-4'>
                    Powered by HCB, a project by our fiscal sponsor, The Hack Foundation (d.b.a. Hack Club).
                </p>
            </div>

            {/* SECTION 2 - HACK CLUB DONATE PAGE */}
            <div className='flex justify-center items-center w-full pb-16'>
                <div className='flex flex-col w-[95vw] sm:w-[90vw] h-[110vh] sm:h-[90vh] lg:h-[80vh] justify-center items-center'>
                    <iframe src="https://hcb.hackclub.com/donations/start/grounding-neurons" name="donateFrame" className='w-full h-full overflow-hidden rounded-3xl resize'/>
                </div>
            </div>

            <Footer/>
        </main>
    );
};