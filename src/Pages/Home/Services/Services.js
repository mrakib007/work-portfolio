import React from 'react';
import react from '../../../asset/react.png';
import node from '../../../asset/node.png';
import mern from '../../../asset/mern.png';

const Services = () => {
    const services = [
        {
            id: 1,
            img: react,
            name: 'Front-End Development',
            description: 'I have working experience with React, React-router, Html, Css, Bootstrap.',
        },
        {
            id: 2,
            img: node,
            name: 'Back-End Development',
            description: 'I am comfortable and can work with NodeJs,ExpressJS and MongoDB.',
        },
        {
            id: 3,
            img: mern,
            name: 'MERN Stack Development',
            description: 'I can provide my service with MongoDB, ExpressJS, ReactJs and NodeJs.',
        }
    ]
    return (
        <div>
            
        </div>
    );
};

export default Services;