"use client";
import React, { useEffect } from 'react';
import { workData } from '../data/workData'; // Ensure correct import path
import { certificationData } from '@/data/certificationData';
import { educationData } from '../data/educationData'; // Ensure correct import path
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            // duration: 10000, // Animation duration (optional)
            // offset: 100, // Offset value (optional)
        });
    }, []);
    return (
        <div className='scroll-smooth'>
            <div className='flex flex-col gap-5'>
                <div>
                    <h1 className='text-4xl pb-4'>Work Experience</h1>
                    {
                        workData?.work_experience?.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4' data-aos="zoom-in" data-aos-duration="1000">
                                    {/* Card Style with gap */}
                                    <div className=' bg-white dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 '>
                                        <h2 className='text-xl font-semibold'>{data.company_name}</h2>
                                        <p className='text-lg'>{data.designation}</p>
                                        <p className='text-lg'>{data.from} - {data.to}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div>
                    <h1 className='text-4xl pb-4'>Education</h1>
                    {
                        educationData?.work_experience?.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4' data-aos="zoom-in" data-aos-duration="1000">
                                    {/* Card Style with gap */}
                                    <div className=' bg-white dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 '>
                                        <h2 className='text-xl font-semibold'>{data.company_name}</h2>
                                        <p className='text-lg'>{data.designation}</p>
                                        <p className='text-lg'>{data.from} - {data.to}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl pb-4">
                        Certifications
                    </h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {certificationData?.certificationData?.map((data, index) => (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                className=" bg-white dark:bg-gray-800 
                 text-gray-800 dark:text-gray-200  p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 ">

                                <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                                    title="View Certificate"
                                >
                                    <img src="/assets/images/certifications/link.png" alt="" className='h-5 w-5'/>
                                </a>
                                {/* Render the image */}
                                <img src={data.img} alt={data.certificate_name} className="w-16 h-16 mb-4" />

                                {/* Render the certificate provider */}
                                <h2 className="text-xl font-semibold">{data.certificate_name}</h2>
                                <h2 className="text-gray-600">Provided By: {data.certificate_provider}</h2>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
