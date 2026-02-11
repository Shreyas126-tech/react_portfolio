import React from 'react';

const About = () => {
    return (
        <div className='w-full bg-white py-16 px-4' id="about">
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold uppercase'>About Me</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Data Analytics Enthusiast</h1>
                    <p className='py-4 text-gray-600'>
                        I am Shreyas P, a passionate Data Analyst with a knack for uncovering patterns and trends in complex datasets.
                        My expertise lies in using tools like Python, SQL, and visualization platforms to translate raw numbers into meaningful stories.
                        I am dedicated to helping organizations make data-driven decisions that lead to growth and efficiency.
                    </p>
                </div>
                <div className='flex justify-center items-center'>
                    {/* Placeholder for an image or generic illustration */}
                    <div className="w-[300px] h-[300px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        [Your Image Here]
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
