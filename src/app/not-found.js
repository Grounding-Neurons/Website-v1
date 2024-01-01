import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import Image from 'next/image';
import SocialSideBar from '@/components/socialsidebar';

import gnLogoCircle from '/public/assets/GroundingNeuronsCircle.png';

export default async function NotFound() {
  return (
    <main className='flex flex-col min-h-screen bg-white'>
        <NavBar/>
        <SocialSideBar/>

        <div className='m-auto text-center grid min-h-full place-items-center bg-white px-6 py-32 sm:py-48 lg:px-8'>
          <Image src={gnLogoCircle} width={256} height={256} alt='Grounding Neurons Logo'/>
          <p className="mt-8 text-2xl font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl font-librecaslontext">Page not found.</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
          <p className="mt-6 text-base leading-7 text-gray-500">If you believe this was a mistake, please contact our Webmaster by following the link below.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-orange-800 transition-all px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Go back home
            </a>
            <a href="/contact#webmaster" className="text-sm font-semibold text-gray-900">
              Contact Webmaster <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <Footer/>
    </main>
  );
};