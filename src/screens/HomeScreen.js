import React, { useEffect, useState, useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiDotnet,
  SiMicrosoftsqlserver,
  SiCanva,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiFirebase,
  SiGit,
  SiFlutter,
  SiPython,
  SiNodedotjs,
  SiFrappe,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Resume from "../assets/Awan_Resume.pdf";
import "../styles/HomeScreen.css";

function HomeScreen() {
  const skillsRef = useRef(null);
  const isVisible = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <div className="info">
            <h1 className="hero-title">Awan Maknojia</h1>
            <h2 className="hero-subtitle">Junior ERPNext Developer & Software Developer</h2>
            <div className="">
              <p className="homeintro" >
                As a passionate Junior Software Developer with 1 year of experience in backend and frontend development, I specialize in C#, MySQL, ReactJS, Node.js, and .NET Core to create efficient, scalable, and user-friendly applications. I completed my BSc in Information Technology from 2020 to 2023 with an 8.22 CGPA and am currently pursuing my MSc in Information Technology from 2023 to 2025 at Mumbai University, set to graduate in the next 2 to 3 months. My expertise includes CRUD operations with C# and MySQL, high-performance API development with .NET Core, and full-stack application development using ReactJS, Node.js, Express.js, and Prisma ORM. Passionate about problem-solving and innovation, I continuously enhance my skills and stay updated with the latest technologies to build secure, scalable, and impactful software solutions.
              </p>
            </div>


            <div className="social-media">
              <a
                href="https://www.linkedin.com/in/awan-maknojia-b6b46b222/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
              >
                <FaLinkedin aria-label="LinkedIn" />
              </a>
              <a
                href="https://github.com/Awan-Maknojia"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub Profile"
              >
                <FaGithub aria-label="GitHub" />
              </a>
              <a
                href="mailto:me@maknojiaawan.com"
                className="social-link"
                title="Send Email"
              >
                <FaEnvelope aria-label="Email" />
              </a>
            </div>
            <a
              href={Resume}
              download
              className="download-resume"
              title="Download Resume"
            >
              Download Resume
            </a>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/`}
            // alt="Dhruv Chheda, Web and App. Developer"
            className="hero-photo"
          />
        </div>
      </section>

      <section
        ref={skillsRef}
        className={`skills-section ${isVisible ? "visible" : ""}`}
        data-aos="fade-up"
      >
        <h2 className="skills-title">Skills</h2>
        <div className="skills-category" data-aos="fade-up">
          <h3>Frontend Technologies</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiHtml5 className="skill-icon" />
              <p>HTML</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiCss3 className="skill-icon" />
              <p>CSS</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiJavascript className="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiReact className="skill-icon" />
              <p>React</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiFlutter className="skill-icon" />
              <p>Flutter</p>
            </div>

          </div>
        </div>
        <div className="skills-category" data-aos="fade-up">
          <h3>Backend Technologies</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiDotnet className="skill-icon" />
              <p>.NET</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiPython className="skill-icon" />
              <p>Python</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiNodedotjs className="skill-icon" />
              <p>NodeJS</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiFrappe className="skill-icon" />
              <p>Frappe</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiMicrosoftsqlserver className="skill-icon" />
              <p>MS SQL Server</p>
            </div>
          </div>
        </div>

        {/* <div className="skills-category" data-aos="fade-up">
          <h3>Designing Skills</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiCanva className="skill-icon" />
              <p>Canva</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiFigma className="skill-icon" />
              <p>Figma</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobephotoshop className="skill-icon" />
              <p>Photoshop</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobeillustrator className="skill-icon" />
              <p>Illustrator</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobeaftereffects className="skill-icon" />
              <p>After Effects</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiAdobepremierepro className="skill-icon" />
              <p>Premiere Pro</p>
            </div>
          </div>
        </div> */}

        <div className="skills-category" data-aos="fade-up">
          <h3>Tools</h3>
          <div className="skills-list">
            <div className="skill-card" data-aos="flip-left">
              <SiFirebase className="skill-icon" />
              <p>Firebase</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiGit className="skill-icon" />
              <p>Git</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiGithub className="skill-icon" />
              <p>GitHub</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiDocker className="skill-icon" />
              <p>Docker</p>
            </div>
            <div className="skill-card" data-aos="flip-left">
              <SiCanva className="skill-icon" />
              <p>Canva</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeScreen;
