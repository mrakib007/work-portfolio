import React from 'react';
import HomePage from '../HomePage/HomePage';
import Services from '../Services/Services';
import About from './About/About';

const Home = () => {
    return (
        <div>
            <div className="mx-5">
                <HomePage></HomePage>
                <About></About>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;