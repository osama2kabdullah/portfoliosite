import React, { useContext } from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from "../App";
import HelmetMe from "./shared/HelmetMe";

const About = () => {
  const buttonStyle =
    "px-3 rounded-full cursor-pointer border-2 dark:border-dark-text dark:bg-black border-black dark:hover:bg-light-bg dark:text-dark-text dark:hover:text-black hover:text-white hover:bg-black";
    
  return (
    <section className="text-center bg-light-bg dark:bg-dark-bg flex flex-col ga-3 justify-center items-center h-screen">
      <HelmetMe>About</HelmetMe>
      <h3 className="text-title dark:text-dark-text text-center lg:text-5xl lg:px-5 px-2 text-3xl">
        Write code for develop web applications{" "}
      </h3>
      <p className=" lg:w-3/6 mx-auto w-5/6 dark:text-dark-text lg:text-2xl text-xl my-7">
        I am Md. Abdullah. A junior developer. I mainly develop client-side web
        applications with react.js.{" "}
        <a
        className="underline text-blue-500"
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/14f5uTmyTSQkpMP4YuER7kv_WaPhy4gCPEb2QQtpEvfs/edit#heading=h.vm051rmyhoww"
        >
          {" "}
          See my resume
        </a>
      </p>
      <div className="h-[12em] w-[12em] rounded-full overflow-hidden">
        <img src='https://i.ibb.co/Pr7tRw0/profile-Image.jpg' alt="" />
      </div>
      
          
      <div className="flex gap-3">
          <a target="_blank"
          rel="noreferrer"
          href="https://github.com/osama2kabdullah" style={{display:'flex', gap:2, alignItems: 'center'}} className={buttonStyle}>
            <FaGithub/>
            Github
          </a>
          <a target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/md-abdullah-9121b5228/" style={{display:'flex', gap:2, alignItems: 'center'}} className={buttonStyle}>
            <FaLinkedin/>
            Linkedin
          </a>
          </div>
      
    </section>
  );
};

export default About;
