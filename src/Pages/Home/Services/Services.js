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
        <div className='my-10 container mx-auto'> 
            <h2 className='text-xl m-5'>Works I Do</h2>
            <div className="flex">
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