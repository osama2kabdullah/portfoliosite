import React from "react";
import profileImage from "../images/profileImage.jpg";

const About = () => {
  const buttonStyle =
    "px-3 rounded-full cursor-pointer border-2 border-black hover:bg-black hover:text-white";
  return (
    <section className="text-center flex flex-col ga-3 justify-center items-center h-[80vh]">
      <h3 className="text-title  lg:text-5xl px-5 text-3xl">
        Write code for develop web applications{" "}
      </h3>
      <p className=" lg:w-3/6 mx-auto w-4/6 lg:text-2xl text-xl my-7">
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
        <img src={profileImage} alt="" />
      </div>
      
          
      <div className="flex gap-3">
          <a target="_blank"
          rel="noreferrer"
          href="https://github.com/osama2kabdullah" className={buttonStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Github
          </a>
          <a target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/md-abdullah-9121b5228/" className={buttonStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Linkedin
          </a>
          </div>
      
    </section>
  );
};

export default About;
