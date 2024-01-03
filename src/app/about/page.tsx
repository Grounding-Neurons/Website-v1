import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import SocialSideBar from '@/components/socialsidebar';
import PersonProfile from '@/components/personprofile';
import DonateFooter from '@/components/donatefooter';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import gnLogoCircle from '/public/assets/GroundingNeuronsCircle.png';
import background from '/public/assets/backgrounds/bgabout.jpg';

export default function About() {
    return (
        <main className='bg-white'>
            <NavBar page='about'/>
            <SocialSideBar page='about'/>

            {/* HERO */}
            <div id='triggerElement' className='pt-20 flex relative justify-center items-center h-[35vh]'>
                <Image src={background} fill={true} priority={true} quality={100} alt='' className='z-0 object-cover object-center'/>
                <div className='absolute z-1'>
                    <p className='font-librecaslontext text-white text-3xl max-w-72 sm:max-w-none sm:text-4xl slide-animation-short text-center'>About Grounding Neurons</p>
                </div>
            </div>
            
            {/* SECTION 1 - ABOUT GROUNDING NEURONS */}
            <div className='py-16 lg:pt-24 pb-16 flex justify-center' id='about'>
                <div className='flex flex-col lg:flex-row justify-center items-center bg-white font-librecaslontext max-w-[1280px]'>
                    {/* MOBILE */}
                    <Image src={gnLogoCircle} width={196} height={196} alt='Grounding Neurons Logo' className='lg:hidden'/>
                    <div className='px-8 sm:px-16 max-w-[1080px] tracking-wide flex flex-col justify-between items-center sm:items-baseline text-center text-pretty sm:text-wrap sm:text-left'>
                        <div className='flex py-8 lg:pt-0 lg:pb-10 text-2xl sm:text-3xl text-red-600'>
                            <h1 className='slide-animation-medium'>Our Mission:</h1>
                        </div>
                        <div className='text-base sm:text-lg'>
                            <p>
                                Grounding Neurons, a fiscally-sponsored 501(c)(3) non-profit organization, is committed to addressing the significant healthcare challenge posed by the treatment gap for epilepsy in Africa.
                                Limited access to medical facilities, shortage of healthcare professionals, and insufficient awareness contribute to this gap.
                            </p>
                        </div>
                        <div className='pt-10 pb-8 text-2xl sm:text-3xl text-amber-500'>
                            <h1 className='slide-animation-medium'>An initiative proudly run by students.</h1>
                        </div>
                        <div className='flex flex-col items-center sm:items-baseline text-base sm:text-lg'>
                            <p>
                                Based in New York, NY, USA, Grounding Neurons is made possible by a collaboration between passionate high school and undergraduate college students seeking to make a global impact in healthcare.
                            </p>
                            <p className='flex items-center pt-4 text-black font-medium text-base sm:text-lg hover:brightness-125'>
                                <Link href='/about#team' className='pr-[10px]'><u>Meet the Team</u> &rarr;</Link>
                            </p>
                        </div>
                    </div>
                    {/* DESKTOP */}
                    <Image src={gnLogoCircle} width={312} height={312} alt='Grounding Neurons Logo' className='hidden lg:block px-2'/>
                </div>
            </div>

            {/* SECTION 2 - WHAT IS EPILEPSY? */}
            <div id='epilepsy' className='flex flex-col py-16 items-center'>
                <div className='bg-gray-500 h-[2px] w-[90vw] sm:max-w-7xl'/>
                <div className='flex flex-col py-8 sm:py-12 justify-center items-center'>
                    <p className='font-librecaslontext text-red-800 text-3xl sm:text-4xl'>What is Epilepsy?</p>
                </div>
                <div className='bg-gray-500 h-[2px] w-[90vw] sm:max-w-7xl'/>
                <div className='flex flex-col lg:flex-row py-16 justify-center items-center bg-white font-librecaslontext max-w-[1280px]'>
                    {/* MOBILE */}
                    <Image src='/assets/graphics/samplewebsitephoto3.jpg' width={324} height={324} alt='' className='sm:hidden'/>
                    {/* DESKTOP */}
                    <Image src='/assets/graphics/samplewebsitephoto3.jpg' width={512} height={512} alt='' className='hidden sm:block'/>
                    <div className='px-8 sm:px-16 max-w-[1080px] tracking-wide flex flex-col justify-between items-center sm:items-baseline text-center text-pretty sm:text-wrap sm:text-left'>
                        <div className='py-8 lg:pt-0 lg:pb-10 text-2xl sm:text-3xl text-red-600'>
                            <h1 className='slide-animation-medium'>Epilepsy is Africa's biggest neurological disorder.</h1>
                        </div>
                        <p className='text-base sm:text-lg'>
                            Epilepsy is a neurological condition characterized by recurrent seizures, which are episodes of abnormal electrical activity in the brain. These seizures can manifest in various ways, from momentary lapses in attention to full-body convulsions. Importantly, epilepsy is a chronic disorder, meaning it persists over the long term.
                        </p>
                        <p className='pt-8 pb-2 text-base sm:text-lg'>
                            These seizures can affect various aspects of a person's life, including their cognitive functions, emotions, and daily activities. Living with epilepsy means navigating not only the challenges of the seizures themselves but also coping with ongoing impacts on one's mental, emotional, and social well-being.
                        </p>
                        <p className='flex items-center pt-4 text-black font-medium text-base sm:text-lg hover:brightness-90'>
                            <Link href='https://www.epilepsy.com/what-is-epilepsy' className='pr-[10px]' target='_blank' rel='noopener noreferrer'><u>More About Epilepsy</u></Link>
                            <FaExternalLinkAlt color='gray'/>
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 2 - MEET THE TEAM */}
            <div id='team' className='flex flex-col items-center -mb-24'>
                <div className='bg-gray-500 h-[2px] w-[90vw] sm:max-w-7xl'/>
                <div className='flex flex-col py-8 sm:py-12 justify-center items-center'>
                    <p className='font-librecaslontext text-red-800 text-3xl sm:text-4xl'>Meet the Team!</p>
                </div>
                <div className='bg-gray-500 h-[2px] w-[90vw] sm:max-w-7xl'/>
                <div className='pt-24 sm:py-24 mx-4 sm:mx-auto'>
                    <div className='flex justify-center items-center pb-16 text-2xl sm:text-3xl text-red-600 font-librecaslontext'>
                        <h1 className='slide-animation-medium'>Grounding Neurons Team:</h1>
                    </div>
                    {/* MOBILE */}
                    <div className='grid grid-rows-1 grid-cols-2 gap-8 lg:hidden'>
                        <PersonProfile firstName='Hisham' lastName='Osman' position='Founder, Chief Executive Officer' school='Benjamin N. Cardozo High School' linkedin='hosma' email=''/>
                        <PersonProfile firstName='Shorook' lastName='Esmaeel' position='Head of Strategic Planning & Development' school='McNair Academic High School' linkedin='' email=''/>
                        <PersonProfile firstName='Ahmed' lastName='Osman' position='Chief Technology Officer, Webmaster' school='New York Institute of Technology' linkedin='aosma' email=''/>
                        <PersonProfile firstName='Enyang' lastName='Li' position='Board Secretary' school='Benjamin N. Cardozo High School' linkedin='' email=''/>
                    </div>
                    <div className='sm:mt-12 lg:-mt-2 flex justify-center items-center lg:hidden'>
                        <PersonProfile firstName='Veronica' lastName='Jei Lopez' position='Head of Marketing & Outreach' school='New York Institute of Technology' linkedin='' email=''/>
                    </div>
                    {/* DESKTOP */}
                    <div className='pb-24 lg:grid grid-rows-1 grid-cols-3 gap-8 bg-white hidden'>
                        <PersonProfile firstName='Hisham' lastName='Osman' position='Founder, Chief Executive Officer' school='Benjamin N. Cardozo High School' linkedin='hosma' email=''/>
                        <PersonProfile firstName='Shorook' lastName='Esmaeel' position='Head of Strategic Planning & Development' school='McNair Academic High School' linkedin='' email=''/>
                        <PersonProfile firstName='Ahmed' lastName='Osman' position='Chief Technology Officer, Webmaster' school='New York Institute of Technology' linkedin='aosma' email=''/>
                    </div>
                    <div className='lg:flex justify-center items-center hidden'>
                        <PersonProfile firstName='Veronica' lastName='Jei Lopez' position='Head of Marketing & Outreach' school='New York Institute of Technology' linkedin='' email=''/>
                        <div className='px-16'/>
                        <PersonProfile firstName='Enyang' lastName='Li' position='Board Secretary' school='Benjamin N. Cardozo High School' linkedin='' email=''/>
                    </div>
                </div>
            </div>

            <DonateFooter/>
            <Footer/>
        </main>
    );
};