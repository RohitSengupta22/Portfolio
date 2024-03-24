import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS file
import NavComp from './NavComp';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Footer from './Footer';

const Main = () => {
  useEffect(() => {
    AOS.init({ // Initialize AOS
      duration: 1000, // Animation duration
      
      mirror: false // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className='bg-indigo-600'>
      <NavComp />
      <div data-aos='fade-up'> {/* Add data-aos attribute to animate on scroll */}
        <Hero />
      </div>
      <hr className='opacity-10' data-aos='fade-up'></hr>
      <div data-aos='fade-up'>
        <Skills />
      </div>
      <hr className='opacity-10' data-aos='zoom-out'></hr>
      <div data-aos='fade-up'>
        <Projects />
      </div>
      <hr className='opacity-10' data-aos='fade-up'></hr>
      <div data-aos='fade-up'>
        <Experience />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
