import React from 'react';
import doctor from '../../../asset/doctor.png';
import './Works.css';

const Works = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold'>Some Works of Mine</h2>
            {/* <div className='parent flex-row-reverse'>
            <div className=''>
                <img src={doctor} alt="" srcset="" />
            </div>
            <div className=''>
                <h5 className='text-xl font-bold text-primary'>Featured Project</h5>
                <h4 className='text-2xl font-bold text-secondary'>Doctors Portal</h4>
                <div data-theme='dark' className='child'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quibusdam et odit, modi harum voluptatem blanditiis necessitatibus consectetur iste nam qui facere neque delectus doloremque eos maxime quos dicta tempora cumque voluptates labore impedit, hic omnis. Voluptatibus quia obcaecati, magni tempora, inventore error adipisci in nesciunt.
                    
                </p>
                </div>
            </div>
            </div> */}

<div className="grid gap-4 grid-cols-2">

<div className="hero lg:h-96 rounded-lg" style={{ backgroundImage: `url(${doctor})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="hero lg:h-96 rounded-lg" style={{ backgroundImage: `url(${doctor})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="hero lg:h-96 rounded-lg" style={{ backgroundImage: `url(${doctor})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<div className="hero lg:h-96 rounded-lg" style={{ backgroundImage: `url(${doctor})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

</div>
        </div>
    );
};

export default Works;