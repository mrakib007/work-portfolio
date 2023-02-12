import React from "react";
import brandImg from "../../../asset/IMG_8657.jpg";
const HomePage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={brandImg} alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Hi, I am Rakibul Hasan</h1>
            <p className="py-6">
              I am a Junior Level MERN stack web developer. I mainly focus on frontend development, but I am also interested in backend too.
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
