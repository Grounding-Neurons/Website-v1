import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import SocialSideBar from '@/components/socialsidebar';
import DonateFooter from '@/components/donatefooter';
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import background from '../../public/assets/backgrounds/bghomegraddark.png';
import samplephoto1 from '../../public/assets/graphics/samplewebsitephoto1.png';
import hishamPicture from '../../public/assets/people/Hisham.jpeg';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar page='home'/>
      <SocialSideBar page='home'/>

      {/* HERO */}
      <div id='triggerElement' className="flex flex-col relative items-center justify-center sm:justify-normal h-[90vh] bg-white">
        <Image src={background} fill={true} priority={true} quality={100} alt='' className='z-0 object-cover object-center'/>
        <div className='absolute flex flex-col items-center justify-center size-full z-1 subpixel-antialiased tracking-tighter sm:tracking-normal text-center'>
          {/* DESKTOP */}
          <p className='hidden sm:block text-white font-librecaslontext font-bold text-[48px] slide-animation-short'>
            Tackling the overlooked healthcare
          </p>
          <p className='hidden sm:block text-white font-librecaslontext font-bold text-[48px] slide-animation-short'>
            crisis of epilepsy in Africa.
          </p>
          {/* MOBILE */}
          <p className='sm:hidden text-white font-librecaslontext font-bold text-2xl slide-animation-short leading-10'>
            Tackling the 
          </p>
          <p className='sm:hidden text-white font-librecaslontext font-bold text-2xl slide-animation-short leading-10'>
            overlooked healthcare crisis of epilepsy in Africa.
          </p>
          <p className='pt-4 text-white font-librecaslontext font-semibold text-lg sm:text-[22px] underline underline-offset-4 slide-animation-medium'>
            <Link href='/about#epilepsy' className='hover:brightness-90 transition-all'>What is epilepsy?</Link>
          </p>
        </div>
      </div>

      {/* SECTION 0 - DONATION GOAL */}
      {/* <div className='bg-gradient-to-br from-yellow-600 to-red-600 py-4 sm:py-0 sm:h-[10vh] flex justify-center items-center'>
        <div className='flex flex-col sm:flex-row text-center items-center font-librecaslontext text-xl sm:text-3xl text-white'>
          <h1>Current Goal:&nbsp;</h1>
          <div className='flex flex-row'>
            <h1 className='font-inter font-bold tracking-tight'>US$3,000</h1>
            <h1>&nbsp;by January 31st, 2024.</h1>
          </div>
          <Link href='/donate' className="mt-2 sm:mt-0 sm:ml-6 rounded-xl bg-orange-800 px-3.5 py-2 sm:py-2.5 font-inter text-base sm:text-lg font-semibold text-white shadow-sm tracking-tight
            hover:bg-orange-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Donate <span aria-hidden="true" className='font-sans'>&rarr;</span>
          </Link>
        </div>
      </div> */}

      {/* SECTION 1 - AFRICA'S BIGGEST DISORDER */}
      <div id="1" className='justify-center items-center py-16 flex flex-col bg-white font-librecaslontext'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          {/* MOBILE */}
          <Image src={samplephoto1} width={384} height={384} alt='' className='sm:hidden'/>
          {/* DESKTOP */}
          <Image src={samplephoto1} width={512} height={512} alt='' className='hidden sm:block'/>
          <div className='px-8 max-w-[780px] tracking-wide flex flex-col justify-between text-center sm:text-left'>
            <div className='pt-4 sm:pt-0 pb-10 text-2xl sm:text-3xl text-red-600'>
              <h1 className={`${true ? 'slide-animation-short' : ''}`}>Addressing Africa's <u>biggest</u> neurological disorder.</h1>
            </div>
            <p className='text-base sm:text-lg text-balance'>
              Grounding Neurons is an initiative focused on tackling the greatly overlooked health crisis of epilepsy in Africa, a disorder that affects more than 25 million individuals
              in Africa, with 80% living in low to middle-income countries.
            </p>
            <p className='pt-8 pb-2 text-base sm:text-lg text-balance'>
              Epilepsy is a brain disorder where the brain experiences sudden, unpredictable bursts of electrical activity, commonly leading to seizures.
            </p>
            <p className='pt-4 text-black font-medium text-base sm:text-lg hover:brightness-90'>
              <Link href='/about#epilepsy'><u>About Epilepsy</u> &rarr;</Link>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 TESTIMONIALS/QUOTES */}
      <div className='py-8 flex flex-col justify-center items-center'>
        <div className='bg-gray-400 h-[2px] w-[90vw] sm:max-w-7xl'/>
        <div className='py-16 sm:py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start mx-auto max-w-[1080px] w-full'>
          <div className='sm:pt-16 px-2'>
            <Image src={hishamPicture} height={162} width={162} alt='Hisham Osman' className='rounded-full'/>
          </div>
          <div className='flex flex-row md:h-[512px] pt-8 sm:pt-0 sm:items-center justify-center lg:justify-normal px-6 sm:px-0'>
            <div className='flex'>
              {/* DESKTOP */}
              <FaQuoteLeft size={32} color='rgb(90, 90, 90)' className='mr-6 hidden lg:block'/>
              <div className='sm:pt-2 flex flex-col max-w-3xl font-librecaslontext'>
                <p className='text-pretty text-gray-800 text-lg sm:text-3xl leading-8 sm:leading-10'>
                  <span className='lg:hidden'>"</span>
                    I'm from Sudan, a country where inadequate healthcare, stigma, and government corruption persists.
                    I aim to bridge the gap in epilepsy treatment, envisioning a brighter future for Africa in achieving healthcare equity with other continents.
                  <span className='lg:hidden'>"</span>
                </p>
                <h1 className='pt-8 text-base sm:text-lg text-red-700'>Hisham Osman</h1>
                <h1 className='pt-1 text-base sm:text-lg text-gray-600'>Founder, Chief Executive Officer</h1>
                <div className='pt-14 flex justify-center sm:justify-normal'>
                  <Link href='/about#mission' className="rounded-full bg-orange-700 px-4 py-3 sm:px-6 m:py-4 font-inter text-base sm:text-lg font-semibold text-white shadow-sm tracking-tight
                    hover:bg-orange-600 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Our Mission <span aria-hidden="true" className='font-sans'>&rarr;</span>
                  </Link>
                  <Link href='/about#team' className="ml-4 rounded-full ring ring-inset ring-red-700 px-4 py-3 sm:px-6 m:py-4 font-inter text-base sm:text-lg font-semibold text-red-800 shadow-sm tracking-tight
                    hover:bg-orange-700 hover:text-white transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Meet the Team <span aria-hidden="true" className='font-sans'>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-400 h-[2px] w-[90vw] sm:max-w-7xl'/>
      </div>

      {/* SECTION 3 - PROFESSOR YOUTUBE VIDEO */}
      <div className='pt-16 sm:py-16 px-4 flex flex-col lg:flex-row justify-center items-center font-librecaslontext bg-white'>
        {/* MOBILE/TABLET */}
        <div className='mb-8 border-4 border-red-600 lg:hidden'>
          <iframe className='h-[22vh] w-[40vh]' src="https://www.youtube-nocookie.com/embed/4q4I0HOVthI?si=r_s_J5_l2fhcMiMT" title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>
        <div className='sm:pl-8 max-w-[680px] tracking-wide flex flex-col justify-between items-center lg:items-baseline text-balance text-center lg:text-left'>
          <div className='pb-10 sm:pb-8 text-2xl sm:text-3xl'>
            <h1 className='pb-2 text-red-600 slide-animation-short'>A Scholar's Perspective:</h1>
            <h1 className='lg:pb-3 text-slate-700 text-xl sm:text-2xl slide-animation-short'>Dr. Amadou Gallo Diop, University of Dakar</h1>
            <div className='hidden sm:block bg-slate-700 h-px max-w-lg '/>
          </div>
          <p className='pb-2 sm:pb-0 text-base sm:text-lg'>
            Dr. Amadou Gallo Diop, a neurology and epileptology professor at the University of Dakar and the head of African Affairs for the International League Against Epilepsy,
            discusses the status of epilepsy in Africa and the growing treatment disparity.
          </p>
          <p className='flex items-center pt-4 text-black font-medium text-base sm:text-lg hover:brightness-90'>
            <Link href='https://youtu.be/4q4I0HOVthI' className='pr-[10px]' target='_blank' rel='noopener noreferrer'><u>Watch on YouTube</u></Link>
            <FaExternalLinkAlt color='gray'/>
          </p>
        </div>
        {/* DESKTOP */}
        <div className='border-4 border-red-600 hidden lg:block'>
          <iframe className='h-[350px] w-[600px]' src="https://www.youtube-nocookie.com/embed/4q4I0HOVthI?si=r_s_J5_l2fhcMiMT" title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>
      </div>

      <DonateFooter/>
      <Footer/>
    </main>
  );
};
