import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className='text-white' id="home">
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>DATA ANALYST PORTFOLIO</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Hi, I'm Shreyas P.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Transforming data into
                    </p>
                    <motion.p
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    >
                        Insights
                    </motion.p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>
                    I specialize in analyzing data to drive decision making and solve complex problems.
                </p>
                <a href="#projects" className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-[#00b37e] transition-colors'>
                    View Work
                </a>
            </div>
        </div>
    );
};

export default Hero;
