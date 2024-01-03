import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

const PersonProfile = (
    {firstName, lastName, position, school, linkedin, email }:
    {firstName:string, lastName:string, position:string, school:string, linkedin:string, email:string}) => 
{
    let img = `/assets/people/${firstName}.jpeg`;

    return (
        <div className={`flex flex-col items-center h-[400px]`}>
            {/* MOBILE */}
            <Image src={img} width={162} height={162} alt='' className='sm:hidden rounded-full'/>
            {/* DESKTOP */}
            <Image src={img} width={256} height={256} alt='' className='hidden sm:block rounded-full'/>
            <div className='pt-6 text-center font-librecaslontext font-medium text-sm sm:text-base'>
                <h1 className='text-base sm:text-lg font-bold tracking-tight text-red-700'>{firstName} {lastName}</h1>
                <h2 className='pt-2 text-md text-slate-700'>{position}</h2>
                <h2 className='pt-4 text-md text-slate-500'>{school}</h2>
            </div>
        </div>
    );
};

export default PersonProfile;