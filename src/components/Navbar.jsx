import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', href: '#home' },
        { id: 2, text: 'About', href: '#about' },
        { id: 6, text: 'Education', href: '#education' },
        { id: 3, text: 'Skills', href: '#skills' },
        { id: 4, text: 'Projects', href: '#projects' },
        { id: 5, text: 'Contact', href: '#contact' },
    ];

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SHREYAS P.</h1>
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 hover:text-[#00df9a] cursor-pointer'>
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul
                className={
                    nav
                        ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out duration-500 fixed left-[-100%]'
                }
            >
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>SHREYAS P.</h1>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 border-b border-gray-600'>
                        <a href={item.href} onClick={handleNav}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
