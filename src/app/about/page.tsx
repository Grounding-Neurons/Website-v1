import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import SocialSideBar from '@/components/socialsidebar';
import PersonProfile from '@/components/personprofile';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import gnLogoCircle from '/public/assets/GroundingNeuronsCircle.png';
import background from '/public/assets/backgrounds/bgabout.jpg';

export default function Contact() {
    return (
        <main className='bg-white'>
            <NavBar page='about'/>
            <SocialSideBar page='about'/>

            {/* HERO */}
            <div id='triggerElement' className='pt-20 flex relative justify-center items-center h-[35vh]'>
                <Image src={background} fill={true} priority={true} quality={100} alt='' className='z-0 object-cover object-center'/>
                <div className='absolute flex justify-center items-center underline-animation-container'>
                    <p className='font-librecaslontext text-white text-4xl underline-offset-[14px] slide-animation-short underline-text-animation'>About Grounding Neurons</p>
                </div>
            </div>
            
            {/* SECTION 1 - ABOUT GROUNDING NEURONS */}
            <div className='pt-24 pb-16 flex justify-center' id='about'>
                <div className='flex justify-center items-center bg-white font-librecaslontext max-w-[1280px]'>
                    <div className='px-16 max-w-[1080px] tracking-wide flex flex-col justify-between'>
                        <div className='flex pb-8 text-3xl text-red-600'>
                            <h1 className='slide-animation-medium'>Our Mission:</h1>
                        </div>
                        <div className='text-lg'>
                            <p>
                                Grounding Neurons, a fiscally-sponsored 501(c)(3) non-profit organization, is committed to addressing the significant healthcare challenge posed by the treatment gap for epilepsy in Africa.
                                Limited access to medical facilities, shortage of healthcare professionals, and insufficient awareness contribute to this gap.
                            </p>
                        </div>
                        <div className='pt-10 pb-8 text-3xl text-amber-500'>
                            <h1 className='slide-animation-medium'>An initiative proudly run by students.</h1>
                        </div>
                        <div className='text-lg'>
                            <p>
                                Based in New York, NY, USA, Grounding Neurons is made possible by a collaboration between passionate high school and undergraduate college students seeking to make a global impact in healthcare.
                            </p>
                            <p className='flex items-center pt-4 text-black font-semibold text-lg hover:brightness-125'>
                                <Link href='/about#team' className='pr-[10px]'><u>Meet the Team</u> &rarr;</Link>
                             </p>
                        </div>
                    </div>
                    <Image src={gnLogoCircle} width={312} height={312} alt='Grounding Neurons Logo'/>
                </div>
            </div>

            {/* SECTION 2 - WHAT IS EPILEPSY? */}
            <div id='epilepsy' className='flex flex-col py-16 items-center'>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='flex flex-col py-12 justify-center items-center'>
                    <p className='font-librecaslontext text-red-800 text-4xl'>What is Epilepsy?</p>
                </div>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='flex py-24 justify-center items-center  bg-white font-librecaslontext max-w-[1280px]'>
                    <Image src='/assets/graphics/samplewebsitephoto3.jpg' width={512} height={512} alt=''/>
                    <div className='px-8 tracking-wide flex flex-col justify-between'>
                        <div className='pb-10 text-3xl text-red-600'>
                            <h1 className='slide-animation-medium'>Epilepsy is Africa's biggest neurological disorder.</h1>
                        </div>
                        <p className='text-lg'>
                            Epilepsy is a neurological condition characterized by recurrent seizures, which are episodes of abnormal electrical activity in the brain. These seizures can manifest in various ways, from momentary lapses in attention to full-body convulsions. Importantly, epilepsy is a chronic disorder, meaning it persists over the long term.
                        </p>
                        <p className='pt-8 pb-2 text-lg'>
                            These seizures can affect various aspects of a person's life, including their cognitive functions, emotions, and daily activities. Living with epilepsy means navigating not only the challenges of the seizures themselves but also coping with ongoing impacts on one's mental, emotional, and social well-being.
                        </p>
                        <p className='flex items-center pt-4 text-black font-semibold text-lg hover:brightness-90'>
                            <Link href='https://www.epilepsy.com/what-is-epilepsy' className='pr-[10px]' target='_blank' rel='noopener noreferrer'><u>More About Epilepsy</u></Link>
                            <FaExternalLinkAlt color='gray'/>
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 2 - MEET THE TEAM */}
            <div id='team' className='flex flex-col items-center'>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='flex flex-col py-12 justify-center items-center'>
                    <p className='font-librecaslontext text-red-800 text-4xl'>Meet the Team!</p>
                </div>
                <div className='bg-gray-500 h-[2px] w-full max-w-7xl'/>
                <div className='py-24 px-80'>
                    <div className='flex justify-center items-center pb-16 text-3xl text-red-600 font-librecaslontext'>
                        <h1 className='slide-animation-medium'>Grounding Neurons Team:</h1>
                    </div>
                    <div className='pb-24 grid grid-rows-1 grid-cols-3 gap-8 bg-white font-librecaslontext'>
                        <PersonProfile firstName='Hisham' lastName='Osman' position='Founder, Chief Executive Officer' school='Benjamin N. Cardozo High School' linkedin='hosma' email=''/>
                        <PersonProfile firstName='Shorook' lastName='Esmaeel' position='Head of Strategic Planning & Development' school='McNair Academic High School' linkedin='' email=''/>
                        <PersonProfile firstName='Ahmed' lastName='Osman' position='Chief Technology Officer, Webmaster' school='New York Institute of Technology' linkedin='aosma' email=''/>
                    </div>
                    <div className='flex justify-center items-center'>
                        <PersonProfile firstName='Veronica' lastName='Jei Lopez' position='Head of Marketing & Outreach' school='New York Institute of Technology' linkedin='' email=''/>
                        <div className='px-16'/>
                        <PersonProfile firstName='Enyang' lastName='Li' position='Board Secretary' school='Benjamin N. Cardozo High School' linkedin='' email=''/>
                    </div>
                </div>
            </div>

            <Footer/>
        </main>
    );
};