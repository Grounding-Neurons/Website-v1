import Link from 'next/link';
import Image from 'next/image';

import gnLogoCircle from '/public/assets/GroundingNeuronsCircle.png';

const DonateFooter = () => {
    return (
        <div className='flex flex-col pt-24 pb-12 sm:py-24 items-center'>
            <div className='bg-gray-300 h-[2px] w-full max-w-[90vw]'/>
            <div className='sm:mt-16 flex flex-col sm:flex-row justify-center items-center max-w-7xl'>
                <Image src={gnLogoCircle} width={128} height={128} alt='Grounding Neurons Logo' className='py-8 sm:py-0'/>
                <div className='flex flex-col mb-8 sm:mb-0 mx-10 text-center sm:text-left font-librecaslontext'>
                    <h1 className='text-red-600 text-2xl font-bold underlineunderline-offset-4'>Your contribution is pivotal.</h1>
                    <p className='mt-2 text-lg max-w-[500px]'>
                        Every dollar donated plays a crucial role in narrowing the gap in epilepsy care across Africa. Together, we can make a lasting impact on those in need.
                    </p>
                </div>
                <Link href='/donate' className="rounded-xl bg-orange-800 px-3.5 py-2 sm:py-2.5 font-inter text-lg font-semibold text-white shadow-sm tracking-tight
                    hover:bg-orange-700 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                    Donate <span aria-hidden="true" className='font-sans'>&rarr;</span>
                </Link>
            </div>
        </div>
    );
};

export default DonateFooter;