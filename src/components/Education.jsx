import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const education = [
        {
            school: 'Maharaja Institute of Technology Mysore',
            degree: 'Bachelor of Engineering', // Assumed based on typical profile, can be adjusted
            duration: '2023 - 2027',
            score: 'CGPA: 7.9',
            description: 'Focusing on Computer Science and Data Analytics.'
        },
        // Add more if needed
    ];

    return (
        <div className='w-full bg-[#000300] text-gray-300 py-16 px-4' id="education">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Education</p>
                </div>

                <div className='grid sm:grid-cols-1 gap-8 px-4'>
                    {education.map((edu, index) => (
                        <div key={index} className='flex flex-col md:flex-row gap-4 items-center bg-[#112240] p-6 rounded-lg hover:scale-105 duration-300 shadow-lg shadow-[#040c16]'>
                            <div className='text-[#00df9a]'>
                                <FaGraduationCap size={50} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-2xl font-bold text-white'>{edu.school}</h3>
                                <p className='text-xl text-gray-400'>{edu.degree}</p>
                                <div className='flex gap-4 text-sm text-gray-500 mt-2'>
                                    <span>{edu.duration}</span>
                                    <span className='text-[#00df9a] font-bold'>{edu.score}</span>
                                </div>
                                <p className='mt-2 text-gray-400'>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
