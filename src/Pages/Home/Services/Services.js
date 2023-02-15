import React from "react";
import react from "../../../asset/react.png";
import node from "../../../asset/node.png";
import mern from "../../../asset/mern.png";
import Service from "./Service";
import mokeup from "../../../asset/mokeup.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Services = () => {
  const services = [
    {
      id: 1,
      img: react,
      name: "Front-End Development",
      description:
        "I have working experience with React, React-router, Html, Css, Bootstrap.",
    },
    {
      id: 2,
      img: node,
      name: "Back-End Development",
      description:
        "I am comfortable and can work with NodeJs,ExpressJS and MongoDB.",
    },
    {
      id: 3,
      img: mern,
      name: "MERN Stack Development",
      description:
        "I can provide my service with MongoDB, ExpressJS, ReactJs and NodeJs.",
    },
  ];
  return (
    <div className="my-10">
      <h2 className="text-3xl m-5 text-center">Services That I Offer</h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-4">
        {/* <div className="lg:flex flex-basis-1 justify-center gap-8"> */}
        {
          // services.map(service=>(
          //     <Service key={service.id} service={service}></Service>
          // ))
        }
      </div>

      <div className="lg:flex block">
        <div className="basis-1/2">
          <h2 className="text-2xl mb-3">Frontend</h2>
          <p>
            I build client-side applications with modern features and maintain
            semantic coding style. I use modern tech such as,
            <div className="flex">
              <ul className="basis-1/2 list-disc list-inside">
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
              </ul>
              <ul className="basis-1/2 list-disc list-inside">
                <li>Tailwind</li>
                <li>React</li>
                <li>React Router</li>
                <li>Firebase</li>
              </ul>
            </div>
          </p>

          <h2 className="text-2xl mt-2">Backend</h2>
          <p>
            I provide services regarding backend development. The technologies that I use,
            <div className="flex">
              <ul className="basis-1/2 list-disc list-inside">
                <li>Nodejs</li>
                <li>Express js</li>
                <li>MongoDb</li>
              </ul>
              <ul className="basis-1/2 list-disc list-inside">
                <li>Heroku</li>
               <li>Vercel</li>
              </ul>
            </div>
          </p>
        </div>

        {/*  */}

        <div className="basis-1/2">
          <img
            src={mokeup}
            className="hidden lg:block md:hidden"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
