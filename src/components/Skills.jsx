'use client'
import React, {useEffect} from 'react';
import { skillData } from '../data/skillData'; // Ensure correct import path
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
            AOS.init({
                // duration: 10000, // Animation duration (optional)
                // offset: 100, // Offset value (optional)
            });
        }, []);
    return (
        <div className=''>
            <div className='text-4xl'>Skills I Obtained</div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>Programming Languages</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.programming_languages?.map((data, index) => (
                        <div key={index} data-aos="fade-right" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>Frontend</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.front_end?.map((data, index) => (
                        <div key={index} data-aos="fade-left" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>Backend</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.backend?.map((data, index) => (
                        <div key={index} data-aos="fade-right" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>AI</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.artificial_intelligence?.map((data, index) => (
                        <div key={index} data-aos="fade-left" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>Version Controls</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.version_control?.map((data, index) => (
                        <div key={index} data-aos="fade-right" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-bold underline underline-offset-8'>Tools</h1>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-5'>
                    {skillData?.tools?.map((data, index) => (
                        <div key={index} data-aos="fade-left" data-aos-duration="1000" className='g-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='w-10 h-10' />
                            <h2 className='text-xl font-semibold'>{data.name}</h2>
                        </div>
                    ))}
                </div>
            </div>




        </div>
    );
};

export default Skills;