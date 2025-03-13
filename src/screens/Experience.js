import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Illustration from "../assets/experience.webp";
import "../styles/Experience.css";

const internshipsData = [
  {
    id: 1,
    title: "ERP-Next Junior developer",
    company: "CubeZix Technologies",
    startDate: "1 September",
    endDate: "Present",
    description: "I have worked on Client Scripts for dynamic UI behavior, Server Scripts for backend automation, and Doctypes to customize data structures. I have hands-on experience in data import/export, ensuring smooth data migration and synchronization. My expertise lies in optimizing workflows, automating business processes, and enhancing system efficiency within ERPNext.",
  },
  {
    id: 2,
    title: "React & NodeJS Developer",
    company: "iDigitize Infotech LLP",
    startDate: "15 April 2024",
    endDate: "31 July 2024",
    description:"I developed user-friendly interfaces with ReactJS, ensuring smooth data flow by seamlessly integrating APIs. Utilizing React Hooks like useState and useEffect, I efficiently managed state and created custom hooks to keep the code organized and reusable, focusing on a clean and maintainable frontend. On the backend, I implemented business logic using Node.js and Express.js, leveraging Prisma ORM for efficient database management. I also secured user authentication and protected routes with JWT, ensuring data security. By establishing seamless communication between the frontend and backend, I created a well-structured, scalable, and efficient workflow for the application."  },
  {
    id: 3,
    title: "Software Developer trainee",
    company: "Gymex Gym & Club Management Software",
    startDate: "1 August 2023",
    endDate: "15 April 2024",
    description:"Internship at GreyBits Technologies, where I worked on a Task Management System, gaining hands-on experience in C# and database management to build software from scratch. I contributed to designing, developing, and optimizing backend logic, ensuring efficient task handling and seamless performance. This experience strengthened my skills in software architecture, problem-solving, and full-stack development"
    },

];

const Experience = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <div className="experience-text" data-aos="fade-right">
          <h2>Experiences</h2>
          <p className="experience-description">
          I have hands-on experience in full-stack development using ReactJS, Node.js, Express.js, and Prisma ORM, building user-friendly interfaces and ensuring seamless frontend-backend integration. Skilled in React Hooks, custom hooks, and API integration for efficient state management. On the backend, I develop business logic, manage databases, and secure authentication with JWT. Additionally, I have worked with ERPNext, customizing Doctypes, implementing Client and Server Scripts, and handling data import/export for optimized workflows. My expertise extends to C#, MySQL, and .NET Core, focusing on scalable solutions. Passionate about problem-solving and automation, I strive to enhance system efficiency and user experience.
          </p>
        </div>
        <div className="experience-illustration" data-aos="fade-left">
          <img src={Illustration} alt="Experience" />
        </div>
      </div>
      <div className="internships-section">
        <h3>Internships</h3>
        <div className="timeline">
          {internshipsData.map((internship, index) => (
            <div
              key={internship.id}
              className={`timeline-block ${
                index % 2 === 0 ? "timeline-block-right" : "timeline-block-left"
              }`}
              data-aos="fade-up"
            >
              <div className="marker"></div>
              <div className="timeline-content">
                <h4>{internship.title}</h4>
                <p className="company-name">{internship.company}</p>
                <span>
                  {internship.startDate} - {internship.endDate}
                </span>
                <p className="ExpAlignement">{internship.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
