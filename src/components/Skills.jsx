import React from 'react';
import { FaPython, FaDatabase, FaChartBar, FaTable, FaCode } from 'react-icons/fa';


const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython size={40} className="text-blue-500" /> },
        { name: 'SQL', icon: <FaDatabase size={40} className="text-orange-500" /> },
        { name: 'Tableau', icon: <FaChartBar size={40} className="text-blue-700" /> },
        { name: 'Power BI', icon: <FaChartBar size={40} className="text-yellow-500" /> },
        { name: 'Excel', icon: <FaTable size={40} className="text-green-600" /> },
        { name: 'Pandas', icon: <FaCode size={40} className="text-purple-600" /> },
        { name: 'NumPy', icon: <FaCode size={40} className="text-blue-400" /> },
        { name: 'Data Viz', icon: <FaChartBar size={40} className="text-red-500" /> },
    ];

    return (
        <div className='w-full bg-[#000300] text-gray-300 py-16' id="skills">
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Skills</p>
                    <p className='py-6'>Technologie & Tools I work with</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center py-8'>
                    {skills.map((skill, index) => (
                        <div key={index} className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 pt-4 rounded-lg bg-[#1a1c1e]'>
                            <div className='w-20 mx-auto'>{skill.icon}</div>
                            <p className='my-4 font-bold'>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
