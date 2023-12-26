import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import SocialSideBar from '@/components/socialsidebar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar/>
      <SocialSideBar/>

      {/* HERO */}
      <div className="flex flex-col items-center bg-[url('/assets/bghomegraddark.png')] bg-center bg-cover bg-scroll h-[90vh]">
        <div className='pt-96 subpixel-antialiased text-center'>
          <p className='text-white font-librecaslontext font-bold text-[48px]'>
            Tackling the overlooked healthcare
          </p>
          <p className='text-white font-librecaslontext font-bold text-[48px]'>
            crisis of epilepsy in Africa.
          </p>
          <p className='pt-4 text-white font-librecaslontext font-bold text-[22px] hover:brightness-90 underline'>
            <Link href='/about#what-is-epilepsy'>What is epilepsy?</Link>
          </p>
        </div>
      </div>

      {/* SECTION 0 - SOCIAL MEDIA */}
      <div className='bg-[#ffbdae] h-[10vh]'>
        <p>SECTION 0</p>
      </div>

      {/* SECTION 1 - AFRICA'S BIGGEST DISORDER */}
      <div className='justify-center items-center py-24 flex flex-col bg-white'>
        <div className='flex justify-between items-center'>
          <Image src='/assets/samplewebsitephoto1.png' width={512} height={512} alt=''/>
          <div className='px-8 max-w-[780px] tracking-wide flex flex-col justify-between'>
            <div className='pb-10 text-3xl text-red-600'>
              <h1>Addressing Africa's <u>biggest</u> neurological disorder.</h1>
            </div>
            <p className='text-lg text-balance'>
              Grounded Neurons is an initiative focused on tackling the greatly overlooked health crisis of epilepsy in Africa, a disorder that affects more than 25 million individuals
              in Africa, with 80% living in low to middle-income countries.
            </p>
            <p className='pt-8 pb-2 text-lg text-balance'>
              Epilepsy is a brain disorder where the brain experiences sudden, unpredictable bursts of electrical activity, commonly leading to seizures.
            </p>
            <p className='pt-4 text-black font-librecaslontext font-bold text-lg hover:brightness-90'>
              <Link href='/about#what-is-epilepsy'><u>More About Epilepsy</u> &rarr;</Link>
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 2 - PROFESSOR YOUTUBE VIDEO */}
      <div className='py-24 flex justify-center items-center'>
        <div className='px-8 max-w-[720px] tracking-wide text-lg text-balance'>
          <div className='pb-10 text-3xl'>
            <h1 className='pb-2 text-red-600'>A Scholar's Perspective:</h1>
            <h1 className='text-slate-700'>Dr. Amadou Gallo Diop, University of Dakar</h1>
          </div>
          <p className=''>
            Dr. Amadou Gallo Diop, a neurology and epileptology professor at the University of Dakar and the head of African Affairs for the International League Against Epilepsy,
            discusses the status of epilepsy in Africa and the growing treatment disparity.
          </p>
        </div>
        <div className='border-4 border-red-600'>
          <iframe className='h-[25vh] w-[512px]' src="https://www.youtube-nocookie.com/embed/4q4I0HOVthI?si=r_s_J5_l2fhcMiMT" title="YouTube video player"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
          </iframe>
        </div>
      </div>

      <Footer/>
    </main>
  );
};
