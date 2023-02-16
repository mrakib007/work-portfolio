import React from 'react';
import doctor from '../../../asset/doctor.png';

const Works = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>Some Works of Mine</h2>
            <div className='flex flex-row-reverse'>
            <div className=''>
                <img src={doctor} alt="" srcset="" />
            </div>
            <div className=''>
                <h5 className='text-xl font-bold text-primary'>Featured Project</h5>
                <h4 className='text-2xl font-bold text-secondary'>Doctors Portal</h4>
                <div data-theme='dark' className=''>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quibusdam et odit, modi harum voluptatem blanditiis necessitatibus consectetur iste nam qui facere neque delectus doloremque eos maxime quos dicta tempora cumque voluptates labore impedit, hic omnis. Voluptatibus quia obcaecati, magni tempora, inventore error adipisci in nesciunt, dolores deleniti maiores facilis ut molestias rem quo architecto iste sint ducimus.
                    
                </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Works;