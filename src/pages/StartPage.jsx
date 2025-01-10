import React from 'react';
// import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe';

const StartPage = () => {
    return (
        <div className='px-6 flex flex-col overflow-x-hidden'>
            <div id='home'>
                <HeroSection />
            </div>
            <div id='about' className='pt-16'>
                <About />
            </div>
            <div id='skills' className='pt-16'>
                <Skills />
            </div>
            <div id='projects' className='pt-16'>
                <Projects />
            </div>
            <div id='contact' className='pt-16'>
                <ContactMe />
            </div>

        </div>
    );
};

export default StartPage;