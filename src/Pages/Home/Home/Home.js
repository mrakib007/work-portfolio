import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;