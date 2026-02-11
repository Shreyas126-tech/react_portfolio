import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Sales Data Analysis",
            description: "Analyzed sales data to identify trends and improve revenue strategies. Used Python and Pandas.",
            tags: ["Python", "Pandas", "Matplotlib"],
            link: "#"
        },
        {
            title: "Customer Churn Prediction",
            description: "Built a model to predict customer churn based on usage patterns. Visualized results in Tableau.",
            tags: ["Machine Learning", "Tableau", "SQL"],
            link: "#"
        },
        {
            title: "Financial Dashboard",
            description: "Interactive dashboard for tracking financial KPIs using Power BI.",
            tags: ["Power BI", "Excel", "DAX"],
            link: "#"
        }
    ];

    return (
        <div className='w-full text-gray-300 bg-[#0a192f] py-16' id="projects">
            <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#00df9a]'>Projects</p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <div key={index} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-[#112240] p-4 hover:scale-105 duration-300'>
                            <div className='flex flex-col justify-between h-full'>
                                <div>
                                    <span className='text-2xl font-bold text-white tracking-wider'>
                                        {project.title}
                                    </span>
                                    <p className='pt-2 text-gray-400 text-sm'>
                                        {project.description}
                                    </p>
                                    <div className='pt-4 flex flex-wrap gap-2'>
                                        {project.tags.map(tag => (
                                            <span key={tag} className='px-2 py-1 text-xs bg-[#00df9a] text-black rounded-full'>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className='pt-8 text-center'>
                                    <a href={project.link}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#00df9a] hover:text-black transition-colors'>
                                            Demo
                                        </button>
                                    </a>
                                    <a href={project.link}>
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#00df9a] hover:text-black transition-colors'>
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
