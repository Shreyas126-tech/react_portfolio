import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#000300]'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>SHREYAS P.</h1>
                <p className='py-4'>
                    Thank you for visiting my portfolio. Connect with me on social media or send me an email.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaGithub size={30} className='hover:text-[#00df9a] cursor-pointer' />
                    <FaLinkedin size={30} className='hover:text-[#00df9a] cursor-pointer' />
                    <FaTwitter size={30} className='hover:text-[#00df9a] cursor-pointer' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                {/* Additional footer links can go here */}
            </div>
            <div className="lg:col-span-3 text-center pt-8 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Shreyas P. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
