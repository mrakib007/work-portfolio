import React from 'react';
import brandImg from '../../../../asset/IMG_8657.jpg';
const About = () => {
    return (
        <div className="hero height">
        <div className="hero-content md:flex-row-reverse flex-col lg:flex-row-reverse">
          <img src={brandImg} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="py-6">Hello! My name is Md. Rakibul Hasan and I love creating websites that lives on the internet
            My interest in web development started in 2019 when I was an undergraduate student. 
            I just loved the idea of writing codes and seeing the output beforehand.
            I ended up learning html and css for making small static websites and it was too much fun to do so.</p>
            <p>
                Fast forward today, I am a junior level React developer. I have good knowledge about Css frameworks and some javascript libraries too.
                I am currently focusing on learning backend properly. So than I can become a MERN stack developer.
                
            </p>
          </div>
        </div>
      </div>
    );
};

export default About;