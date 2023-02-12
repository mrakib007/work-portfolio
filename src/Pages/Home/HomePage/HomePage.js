import React from "react";
// import brandImg from "../../../asset/IMG_8657.jpg";
import './Homepage.css';
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
            <p>Hi, I am </p>
            <h1 className="text-5xl font-bold"> Rakibul Hasan,</h1>
            <h2 className="text-5xl font-bold">I am passionate about building new websites</h2>
            <p className="py-6">
              I am a Junior Level MERN stack web developer. I mainly focus on frontend development. <br></br> But I am also interested in backend too.
              My main goal is to make top level web applications.
            </p>
            <button className="btn btn-primary">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
