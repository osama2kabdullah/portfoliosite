import React from "react";
import FeedBack from "./FeedBack";
import ProjectLink from "./ProjectLink";
import jerp from "../../images/jerp.png";
import HelmetMe from "../shared/HelmetMe";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const pHeadStyle = "font-bold underline";
  const {name} = useParams();
  const ptextStyle = "lg:text-xl text-lg lg:leading-10 leading-7";
  const text_style = `${ptextStyle} dark:text-dark-text text-light-text`;
  //
  
  const fitures = ['Login and signup system with with firebase', 'Admin/User authorization system with JWT token', 'Admin can add new product, Update product, Delete product, Make user admin, block any user but Cannot block another admin.', 'The user dosent authorized like an admin. User can order product then pay that and can cancel order only before pay.', 'Admin can manage orders what paid and unpaid.', 'User cannot buy under the limitation of product buy limit and cannot buy over the availbale products and also cannot buy stock out products. It contros by tarnary operator.', 'User can reset password if frogotted.', 'User and Admin both are edit there profile, such as - add avatar, home address etc essential info.', 'User can add a review but admin cannot this and admin cannot also buy any product.', `CRUD operation api's`, 'applieng authorization system with JWT token', 'Admin verifaction system'];
  const technology = ['React 18.2.0 - Frontend library', 'firebase 9.11.0 - authentication', 'Node.js 16.16.0 - backend', 'Talwind 3.1.8 - design', 'stripe 1.39.0 - payment intigration', 'daisyUI 2.31.0 & flowbite 1.5.3 - design component', 'react hook form 7.37.0 - form management', 'react firebase hooks 5.0.3 - firebase authentication simpliefied', 'react helmet 6.1.0 - dynamic page title', 'react query 3.39.2 - call api for load data from database', 'react router dom 6.4.2 - for routing page to page without reload', 'Node.js 16.16.0', 'MongoDB 4.10.0 - database', 'cors 2.8.5 - to access api from others', 'dotenv 16.0.3 - for secure some keys', 'express.js 4.18.1 - Node framwork', 'Jsonwebtoken 5.5.1 - applied authorization system']
  
  return (
    <section className="dark:bg-dark-bg bg-light-bg">
      <div className="lg:w-4/6 dark:bg-dark-bg bg-light-bg mx-auto w-11/12">
      <HelmetMe>{`${name} project`}</HelmetMe>
      <p className="lg:text-5xl text-3xl dark:text-dark-text font-bold font-primary">
          Jerp -{" "}
          <span className="italic text-title text-2xl">A manufacturer company website</span>
        </p>

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

      <img src={jerp} alt="" />
      <p className="mt-2 dark:text-dark-text border-gray-300 dark:border-light-text border-b-2 py-2 text-end">
        2 Aug, 2022 - 3 Sep, 2022
      </p>
      <div className="">
        <p className={text_style}>
          <span className={pHeadStyle}>Description:</span> A manufacturer company website. they sales huge number of products at a time. The website not a indivitual shopping platform. this a dealer type site. Admin and User contribution type site.
        </p>
        <p className={text_style}>
          <span className={pHeadStyle}>Features: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            {
              fitures.map((fiture, index)=><li key={index} className={text_style}>{fiture}</li>)
            }
          </ul>
        </p>
        <p className={text_style}>
          <span className={pHeadStyle}>Technologhies and Pakages: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            {
              technology.map((techno, index)=><li key={index} className={text_style}>{techno}</li>)
            }
          </ul>
        </p>
        <p className={text_style}>
          <span className={pHeadStyle}>Usage guid:</span> Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Ut vero praesentium consequuntur
          earum quis blanditiis necessitatibus error asperiores adipisci
          corrupti? Ut earum culpa quae eius corporis. Eaque non possimus
          laudantium.
        </p>
        <p className={text_style}>
          <span className={pHeadStyle}>Bugs/Issue: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            <li className={text_style}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, unde?
            </li>
            <li className={text_style}>
              Sequi incidunt voluptas ab, cupiditate provident labore odio
              veniam hic.
            </li>
            <li className={text_style}>
              Eligendi sint optio iusto enim vero ipsa, nam fugit quae!
            </li>
            <li className={text_style}>
              Beatae dicta aperiam a voluptas assumenda, pariatur suscipit. Eos,
              iste.
            </li>
            <li className={text_style}>
              Quae dolorem laborum odio obcaecati dicta ex natus in provident.
            </li>
            To contribute -{" "}
            <a
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/osama2kabdullah/jerp-client-side"
            >
              Client repository link 
            </a>{' | '}
            <a
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/osama2kabdullah/jerp-server"
            >
              Server repository link
            </a>
          </ul>
        </p>
      </div>
      <FeedBack></FeedBack>
      </div>
    </section>
  );
};

export default ProjectDetail;
