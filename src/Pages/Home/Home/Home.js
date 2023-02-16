import React from 'react';
import HomePage from '../HomePage/HomePage';
import Services from '../Services/Services';
import Works from '../Works/Works';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <div className="mx-5">
                <HomePage></HomePage>
                <About></About>
                <Services></Services>
                <Works></Works>
            </div>
        </div>
    );
};

export default Home;