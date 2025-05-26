import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am an Information Technology Engineering graduate with a strong foundation in full-stack web development. While 
taking time off for childcare, I remained committed to my passion for technology by working on self-driven projects, 
honing my skills in 
frontend (HTML, CSS, JavaScript, React.js) 
and 
backend (Node.js, JavaScript, MongoDB) 
development.
        </p>

        <br />

        <p className="text-xl">
            
 
I am now actively seeking a Developer role where I can apply my expertise to build scalable, high-performance web 
applications. I am particularly interested in opportunities that involve modern frameworks, cloud technologies, and 
microservices architecture. 
 
I understand the value of hands-on industry experience and am open to starting as an apprentice, trainee, or junior 
developer 
to gain practical exposure, contribute to real-world projects, and grow within a dynamic team. With a 
problem-solving mindset and a continuous learning approach, I am eager to collaborate, innovate, and evolve in a 
professional setting.


<br/>
 
Open to new challenges and excited to kickstart my career journey! 


        </p>
      </div>
    </div>
  );
};

export default About;
