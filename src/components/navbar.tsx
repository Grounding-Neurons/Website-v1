'use client'
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState, Fragment} from 'react';
import { Menu, Transition, Disclosure } from '@headlessui/react';

import gnLogoFull from '/public/assets/GroundingNeurons.png';

const navigation = [
    { name: 'Home', href: '/', current: false },
    { name: 'About Our Initiative', href: '/about', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
    { name: 'Donate', href: '/donate', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = ({page} : {page:string}) => {

    const [nav, setNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNav = () => {setNav(!nav);}

    useEffect(() => {
        const handleScroll = () => {
          const scroll = window.scrollY;
          const isNavbarScrolled = scroll > 0;
          setIsScrolled(isNavbarScrolled);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []
    );

    return (
        <>
            {/* MOBILE / TABLET */}
            <Disclosure as="nav" className={`flex absolute z-[999] min-[840px]:hidden font-quicksand text-white justify-center items-center font-semibold m-auto p-2
                ${page!=='home' ? 'bg-orange-800' : 'bg-orange-800/75'} w-full`}
            >
                {({open}) => (
                    <div className='flex flex-col'>
                        <div className='h-12 grid grid-flow-row grid-cols-12 justify-center items-center'>
                            <Disclosure.Button className="-ml-2 col-start-1 col-span-2 relative inline-flex items-center justify-center rounded-md p-2 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="absolute -inset-0.5"/>
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <GrClose className="block h-6 w-6" aria-hidden="true"/>
                                ) : (
                                    <FaBars className="block h-6 w-6" aria-hidden="true"/>
                                )}
                            </Disclosure.Button>
                            <Link href='/' className='col-start-4 col-span-6'>
                                <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={216} height={128}/>
                            </Link>
                        </div>
                        <Disclosure.Panel className="min-[840px]:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-200 hover:bg-orange-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium font-quicksand'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>
                )}
            </Disclosure>

            {/* DESKTOP */}
            <nav className={`hidden min-[840px]:block top-0 left-0 h-16 sm:h-20 w-full px-4 z-[999] absolute ${page!=='home' ? 'bg-orange-800' : 'bg-orange-800/75'}`}>
                <div className='flex h-full font-quicksand text-white justify-between items-center font-semibold max-w-6xl m-auto p-1'>
                    <ul className='flex items-center'>
                        <li className='hover:brightness-95 transition-all'>
                            <Link href='/'>
                                <Image src={gnLogoFull} alt='Grounding Neurons Logo' width={234} height={72}/>
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex items-center justify-center'>
                        <li className='p-4'>
                            <Link href='/' className={`transition-all hover:brightness-90 relative hover-underline-animation`}>
                                Home
                            </Link>
                        </li>
                        <li className='flex items-center justify-center p-4'>
                            <Menu>
                                <Menu.Button className='transition-all hover:brightness-90 relative hover-underline-animation'>About Our Initiative</Menu.Button>
                                <IoMdArrowDropdown/>
                                <Transition
                                    as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="flex flex-col absolute z-10 mt-40 w-48 origin-top-right rounded-md bg-white text-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                href="/about"
                                                >
                                                    Our Mission
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                href="/about#epilepsy"
                                                >
                                                    What is Epilepsy?
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                href="/about#team"
                                                >
                                                    Meet the Team
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li className='flex items-center p-4'>
                            <Menu>
                                <Menu.Button className='transition-all hover:brightness-90 relative hover-underline-animation'>Contact Us</Menu.Button>
                                <IoMdArrowDropdown/>
                                <Transition
                                    as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="flex flex-col absolute z-10 mt-[124px] w-48 origin-top-right rounded-md bg-white text-black py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                            {({active}) => (
                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                href="/contact"
                                                >
                                                    Contact Form
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                href="/contact#webmaster"
                                                >
                                                    Webmaster Contact
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </li>
                        <li className='flex'>
                            <Link href='/donate' className={`px-4 py-2 ml-3 rounded-lg outline outline-2 outline-red-300 bg-red-400/30 hover:brightness-125 transition-all relative`}>
                                Donate
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavBar;