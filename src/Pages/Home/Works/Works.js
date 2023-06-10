import React from "react";
import doctor from "../../../asset/doctor.png";
import "./Works.css";
import mobilePhone from '../../../asset/mobilePhone.png';
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold mx-2 my-10">Some Works of Mine</h2>
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

      <div className="grid gap-4 lg:mx-0 mx-2 lg:grid-cols-2 grid-cols-1">
        <div
          className="hero lg:h-96 rounded-lg"
          style={{ backgroundImage: `url(${doctor})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Doctors Portal</h1>
              <p className="mb-5">
               A web application for Doctor's appointments and easy payment.
               Patients can easily find the doctor they need. And admins can add doctors and services.
              </p>
              <Link to={'https://doctors-portal-client-60bd8.web.app/'} target="_blank"><button className="btn btn-primary">Live Link</button></Link>
            </div>
          </div>
        </div>

        <div
          className="hero lg:h-96 rounded-lg"
          style={{ backgroundImage: `url(${mobilePhone})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Mobile-Bikri-Korai</h1>
              <p className="mb-5">
                A website for buying and selling old and used phones.
                Your one click place to advertise your used phones or buy the phone you have always wanted.
                Admin,Buyer and Seller type of user facilities are present and easy to use.
              </p>
              <Link to={'https://mobile-bikri-korai.web.app/'} target="_blank"><button className="btn btn-primary">Live Link</button></Link>
            </div>
          </div>
        </div>

        {/* <div
          className="hero lg:h-96 rounded-lg"
          style={{ backgroundImage: `url(${doctor})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> */}

        {/* <div
          className="hero lg:h-96 rounded-lg"
          style={{ backgroundImage: `url(${doctor})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center">
        <Link className="btn btn-secondary my-5 mx-auto" to={'https://github.com/mrakib007?tab=repositories'} target="_blank">See More</Link>
      </div>
    </div>
  );
};

export default Works;
