import React from "react";
import profileImage from "../images/profileImage.jpg";

const About = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-[80vh]">
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
          href="https://drive.google.com/file/d/1dk38hkvKpi5gGNmYcc7TxzLAmN-8GMFE/view?usp=sharing"
        >
          {" "}
          See my resume
        </a>
      </p>
      <div className="h-[12em] w-[12em] rounded-full overflow-hidden">
        <img src={profileImage} alt="" />
      </div>
    </section>
  );
};

export default About;
