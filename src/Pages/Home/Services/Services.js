import React from 'react';
import react from '../../../asset/react.png';
import node from '../../../asset/node.png';
import mern from '../../../asset/mern.png';
import Service from './Service';

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
        <div className='my-10'> 
            <h2 className='text-3xl m-5 text-center'>Works I Do</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4">
            {/* <div className="lg:flex flex-basis-1 justify-center gap-8"> */}
            {
                services.map(service=>(
                    <Service key={service.id} service={service}></Service>
                ))
            }
            </div>
        </div>
    );
};

export default Services;