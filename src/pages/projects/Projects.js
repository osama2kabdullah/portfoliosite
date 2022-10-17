import React from "react";
import { Link } from "react-router-dom";
import jerp from "../../images/jerp.png";
import HashTag from "./HashTag";
import ProjectLink from "./ProjectLink";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiHtml5, SiTailwindcss, SiCss3,  } from "react-icons/si";

const Projects = () => {
  const buttonStyle =
    "px-3 rounded-full border-2 border-black hover:bg-black hover:text-white";
  return (
    <div className="p-5 lg:w-3/5 w-5/5 mx-auto ">
      <div>
        <img src={jerp} alt="" />
        <Link to='/detail/jerp' className="lg:text-2xl text-lg cursor-pointer hover:text-gray-300 underline font-bold font-primary">
          Jerp -{" "}
          <span className="italic text-title">A manufacturer company website</span>
        </Link>
        <div className="flex border-b-2 pb-2 border-red gap-3">
          <span className="text-3xl text-orange-500 bg-white"> <SiHtml5/></span>
          <span className="text-3xl text-blue-500 bg-white"> <SiCss3/></span>
          <span className="text-3xl text-sky-700 bg-white"> <SiTailwindcss/></span>
          <span className="text-3xl text-yellow-500 bg-black"> <SiJavascript/></span>
          <span className="text-3xl text-sky-500"><SiReact/></span>
          <span className="text-3xl text-green-900"><SiNodedotjs/></span>
          <span className="text-3xl text-black"><SiExpress/></span>
          <span>NoSQL</span>
          <span className="text-3xl text-green-500"><SiMongodb/></span>
          
        </div>

        <div className="flex my-3 flex-wrap gap-3">
        <ProjectLink to='https://github.com/osama2kabdullah/jerp-client-side' d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z">
          Client side github repository
        </ProjectLink>
        <ProjectLink to='https://github.com/osama2kabdullah/jerp-server' d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">
          Server side github repository
        </ProjectLink>
        <ProjectLink to='https://jerpmanufacturer-osama.netlify.app/' d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
          Live site
        </ProjectLink>
      </div>
      </div>
    </div>
  );
};

export default Projects;
