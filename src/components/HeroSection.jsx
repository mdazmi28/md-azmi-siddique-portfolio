"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <>
            <div className='scroll-smooth h-screen flex flex-col gap-5 md:flex-row'>
                {/* Left Section with Text */}
                <div className='w-full md:w-1/2 text-center md:text-left flex flex-col justify-center order-2 md:order-1'>
                    <h1 className='text-xl md:text-5xl font-bold  mb-4'>
                        Md Azmi Siddique
                    </h1>
                    <p className='text-lg mb-6'>
                        Software Engineer | Frontend Developer | Problem Solver
                    </p>
                    <TypeAnimation
                        className='text-xl md:text-2xl font-semibold  mb-6'
                        sequence={[
                            'Building intuitive web experiences.',
                            1000,
                            'Crafting innovative solutions for the web.',
                            1000,
                            'Delivering impactful software solutions.',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                            fontSize: '',
                            display: 'inline-block',
                            // color: 'white'
                        }}
                        repeat={Infinity}
                    />
                    <div className="flex flex-row gap-4 items-center justify-center md:items-start md:justify-start">

                        <div className='h-10 w-10'>
                            <a href="https://github.com/mdazmi28/" target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                                <img src="https://img.icons8.com/?size=100&id=63777&format=png&color=000000" alt="Github" />
                            </a>
                        </div>
                        <div className='h-10 w-10'>
                            <a href="https://www.linkedin.com/in/mdazmi28/" target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                                <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" />
                            </a>
                        </div>





                    </div>
                </div>

                {/* Right Section with Image */}
                <div className='w-full md:w-1/2 flex justify-center items-center order-1 md:order-2'>
                    <div className=''>
                        <img
                            src='/assets/images/my_img.png'
                            alt='Your Company Logo'
                            className='shadow-xl object-cover mt-52 md:mt-0 h-32 md:h-[400px] w-auto'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
