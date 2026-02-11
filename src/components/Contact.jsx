import React from 'react';

const Contact = () => {
    return (
        <div className='w-full bg-[#000300] text-gray-300 py-16 px-4' id="contact">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00df9a]'>Contact</p>
                    <p className='py-6'>Submit the form below or shoot me an email - shreyas@example.com</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" placeholder='Name' className='p-2 bg-[#ccd6f6] text-black rounded-md' />
                        <input type="email" placeholder='Email' className='my-4 p-2 bg-[#ccd6f6] text-black rounded-md' />
                        <textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6] text-black rounded-md'></textarea>
                        <button className='text-white border-2 hover:bg-[#00df9a] hover:border-[#00df9a] hover:text-black px-4 py-3 my-8 mx-auto flex items-center duration-300 rounded-md'>Let's Collaborate</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
