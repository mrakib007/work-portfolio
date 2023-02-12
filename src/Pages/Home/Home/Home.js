import React from 'react';
import HomePage from '../HomePage/HomePage';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className="mx-5">
                <HomePage></HomePage>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;