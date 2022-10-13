import React from 'react';
import CarouselImg from '../components/CarouselImg';
import '../styles/Home.css'
import Skills from './Skills';


const Home = () => {
    return (
        <div className='container-home'>
            <CarouselImg />
            <Skills />
        </div>
    );
};

export default Home;