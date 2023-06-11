import React from "react";
import Typical from "react-typical";
// import brandImg from "../../../asset/IMG_8657.jpg";
import "./Homepage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div className="hero height">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src={brandImg} alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
          <div>
            <h5 className="text-2xl">Hi, I am </h5>
            {/* <h1 className="text-5xl font-bold"> Rakibul Hasan,</h1> */}
            <h1 className="text-5xl font-bold">
              <Typical
                steps={[
                  "Rakib Hasan",
                  2000,
                  "A Continuous Learner",
                  2000,
                  "A Javascript Lover",
                  2000,
                ]}
                loop={Infinity}
                wrapper="h1"
              />
            </h1>
            {/* <h2 className="text-4xl font-bold">I am passionate about building new websites</h2> */}
            <h2 className="text-4xl font-bold">
              I love building things that live on the internet.
            </h2>
            <p className="py-6">
              I am a Junior Level MERN stack web developer. I mainly focus on
              frontend development. <br></br>I am also interested in backend
              too. My main goal is to make top level web applications.
            </p>
            <Link to={'https://drive.google.com/file/d/1yUky5Yc2pzDzmAq6khTswFlpk6eHCLzW/view'} target="_blank"><button className="btn btn-primary">Download Resume</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
