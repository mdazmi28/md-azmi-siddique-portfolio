"use client";
import React, {useEffect} from 'react';
import { workData } from '../data/workData'; // Ensure correct import path
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
            <div className='flex flex-col px-6 gap-5'>
                <div>
                    <h1 className='text-4xl '>Work Experience</h1>
                    {
                        workData?.work_experience?.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4' data-aos="zoom-in" data-aos-duration="1000">
                                    {/* Card Style with gap */}
                                    <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 dark:text-black'>
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

                <h1 className='text-4xl'>Education</h1>
                    {
                        educationData?.work_experience?.map((data, index) => {
                            return (
                                <div key={index} className='flex flex-col gap-4' data-aos="zoom-in" data-aos-duration="1000">
                                    {/* Card Style with gap */}
                                    <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mb-6 dark:text-black'>
                                        <h2 className='text-xl font-semibold'>{data.company_name}</h2>
                                        <p className='text-lg'>{data.designation}</p>
                                        <p className='text-lg'>{data.from} - {data.to}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default About;
