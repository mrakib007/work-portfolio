import React from 'react';
import { SocialIcon } from 'react-social-icons';
const Footer = () => {
    return (
        <div>
        <div className='text-center my-20'>
            <h5 className='text-2xl my-3 text-secondary'>Whats Next?</h5>
            <h1 className='text-5xl font-bold'>Get In Touch</h1>
            <p className='my-6'>
            I am open to work for now. If you are interested to work with me just send me a message. <br></br>
            My inbox is always open. Whether you have a question or just want to say hi.<br></br>
             I’ll try my best to get back to you!
            </p>
            <button className='btn btn-outline'>Say Hello</button>
        </div>
        <div className='text-center my-10 mb-8'>
            <SocialIcon className='mx-2' url="https://www.linkedin.com/in/rakib1997/" />
            <SocialIcon className='mx-2' url="https://www.facebook.com/mrakibH007" />
            <SocialIcon className='mx-2' url="https://github.com/mrakib007" />
            <SocialIcon className='mx-2' url="https://www.instagram.com/_its__rakib_/" />
            {/* <SocialIcon className='mx-2' url="https://www.linkedin.com/in/rakib1997/" /> */}
            </div>
        </div>
    );
};

export default Footer;