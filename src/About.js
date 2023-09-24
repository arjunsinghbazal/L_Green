import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {

    const Navigate=useNavigate();
  return (
    <div className="about-container">
      <h1>About L-green</h1>
      
      <p>
      Live Green is a fully functioning e-commerce website for plants 
      and is only a personal project of @arjunsinghbazal it aims to showcase my skills as
       a front-end developer that can build not only beautiful UI/UX experience,
        but also highly useful web application such as an E-commerce store. This website is
         built using React.js, Redux, HTML,CSS, and Javascript. 
      </p>
      <h2 className='green  head'>Contact Information</h2>
      <p>
        <strong>Email:</strong> livegreen@lgreen.com<br />
        <strong>Phone:</strong>+91346453328<br />
        <strong>Address:</strong>Delhi 6 big gali 9 sect. 90
      </p>
      <button className='btn' onClick={()=>Navigate("/contact")}>Contact</button>
      <button type="button" className="btn" onClick={() => Navigate('/')}>
            Back
          </button>
    </div>
  );
};

export default About;
