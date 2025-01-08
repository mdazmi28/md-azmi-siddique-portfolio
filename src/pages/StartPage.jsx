import React from 'react';
// import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';

const StartPage = () => {
    return (
        <div className='flex flex-col overflow-x-hidden'>
            <div id='home'>
                <HeroSection />
            </div>
            <div id='about' className='pt-16'>
                <About />
            </div>
            <div id='skills' className='pt-16'>
                <Skills />
            </div>

        </div>
    );
};

export default StartPage;