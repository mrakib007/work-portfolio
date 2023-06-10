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
import { Link } from "react-scroll";

// import {
//   Tab,
//   initTE,
// } from "tw-elements";
// initTE({ Tab });

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
    <div className="my-10" id="works">
      <h2 className="text-4xl font-bold my-5 "> Services That I Offer</h2>
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
            className="hidden lg:block md:hidden rounded"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>



//     <div>
// <ul
//   class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
//   role="tablist"
//   data-te-nav-ref>
//   <li role="presentation" class="flex-auto text-center">
//     <a
//       href="#tabs-home01"
//       class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
//       data-te-toggle="pill"
//       data-te-target="#tabs-home01"
//       data-te-nav-active
//       role="tab"
//       aria-controls="tabs-home01"
//       aria-selected="true">Home</a>
//   </li>
//   <li role="presentation" class="flex-auto text-center">
//     <a
//       href="#tabs-profile01"
//       class="focus:border-transparent my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
//       data-te-toggle="pill"
//       data-te-target="#tabs-profile01"
//       role="tab"
//       aria-controls="tabs-profile01"
//       aria-selected="false">Profile</a>
//   </li>
//   <li role="presentation" class="flex-auto text-center">
//     <a
//       href="#tabs-messages01"
//       class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
//       data-te-toggle="pill"
//       data-te-target="#tabs-messages01"
//       role="tab"
//       aria-controls="tabs-messages01"
//       aria-selected="false">Messages</a>
//   </li>
// </ul>

// <div class="mb-6">
//   <div
//     class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
//     id="tabs-home01"
//     role="tabpanel"
//     aria-labelledby="tabs-home-tab01"
//     data-te-tab-active>
//     Tab 1 content
//   </div>
//   <div
//     class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
//     id="tabs-profile01"
//     role="tabpanel"
//     aria-labelledby="tabs-profile-tab01">
//     Tab 2 content
//     Tab 2 content
//   </div>
//   <div
//     class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
//     id="tabs-messages01"
//     role="tabpanel"
//     aria-labelledby="tabs-profile-tab01">
//     Tab 3 content
//   </div>

// </div>
// </div>
  );
};

export default Services;
