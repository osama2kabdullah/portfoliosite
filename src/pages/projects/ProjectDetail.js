import React from "react";
import images_8 from "../../images/images_8.jpg";
import FeedBack from "./FeedBack";
import ProjectLink from "./ProjectLink";

const ProjectDetail = () => {
  const pHeadStyle = "font-bold underline";
  const ptextStyle = "lg:text-xl text-lg lg:leading-10 leading-7";
  return (
    <div className="lg:w-4/6 mx-auto w-11/12">
      <span className="lg:text-5xl text-3xl mb-5 block font-primary mt-0">
        project title
      </span>

      <div className="flex my-3 flex-wrap gap-3">
        <ProjectLink d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z">
          Client side github repository
        </ProjectLink>
        <ProjectLink d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z">
          Server side github repository
        </ProjectLink>
        <ProjectLink d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
          Live site
        </ProjectLink>
      </div>

      <img src={images_8} alt="" />
      <p className="mt-2  border-b-2 py-2 text-end">
        2 Aug, 2022 - 3 Sep, 2022
      </p>
      <div className="">
        <p className={ptextStyle}>
          <span className={pHeadStyle}>Description:</span> Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Ut vero praesentium consequuntur
          earum quis blanditiis necessitatibus error asperiores adipisci
          corrupti? Ut earum culpa quae eius corporis. Eaque non possimus
          laudantium.
        </p>
        <p className={ptextStyle}>
          <span className={pHeadStyle}>Features: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            <li className={ptextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, unde?
            </li>
            <li className={ptextStyle}>
              Sequi incidunt voluptas ab, cupiditate provident labore odio
              veniam hic.
            </li>
            <li className={ptextStyle}>
              Eligendi sint optio iusto enim vero ipsa, nam fugit quae!
            </li>
            <li className={ptextStyle}>
              Beatae dicta aperiam a voluptas assumenda, pariatur suscipit. Eos,
              iste.
            </li>
            <li className={ptextStyle}>
              Quae dolorem laborum odio obcaecati dicta ex natus in provident.
            </li>
            <li className={ptextStyle}>
              Odit, laboriosam sequi consequuntur adipisci quisquam incidunt nam
              fuga officiis.
            </li>
            <li className={ptextStyle}>
              Dolor temporibus eaque nisi quidem nostrum asperiores iste fugit
              eum?
            </li>
            <li className={ptextStyle}>
              Voluptates aut ipsam in alias, libero eos quo. Pariatur, minima!
            </li>
            <li className={ptextStyle}>
              Debitis maxime amet molestias, incidunt iusto perspiciatis.
              Consectetur, doloremque quasi?
            </li>
            <li className={ptextStyle}>
              Ab saepe minus porro pariatur at nemo animi repellendus
              aspernatur?
            </li>
            <li className={ptextStyle}>
              Nihil unde ducimus placeat fuga nam sunt! Vero, suscipit sint?
            </li>
            <li className={ptextStyle}>
              Recusandae molestias incidunt quisquam excepturi voluptates,
              ratione rerum ullam nostrum!
            </li>
          </ul>
        </p>
        <p className={ptextStyle}>
          <span className={pHeadStyle}>Technologhies and Pakages: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            <li className={ptextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, unde?
            </li>
            <li className={ptextStyle}>
              Sequi incidunt voluptas ab, cupiditate provident labore odio
              veniam hic.
            </li>
            <li className={ptextStyle}>
              Eligendi sint optio iusto enim vero ipsa, nam fugit quae!
            </li>
            <li className={ptextStyle}>
              Beatae dicta aperiam a voluptas assumenda, pariatur suscipit. Eos,
              iste.
            </li>
            <li className={ptextStyle}>
              Quae dolorem laborum odio obcaecati dicta ex natus in provident.
            </li>
            <li className={ptextStyle}>
              Odit, laboriosam sequi consequuntur adipisci quisquam incidunt nam
              fuga officiis.
            </li>
            <li className={ptextStyle}>
              Dolor temporibus eaque nisi quidem nostrum asperiores iste fugit
              eum?
            </li>
            <li className={ptextStyle}>
              Voluptates aut ipsam in alias, libero eos quo. Pariatur, minima!
            </li>
            <li className={ptextStyle}>
              Debitis maxime amet molestias, incidunt iusto perspiciatis.
              Consectetur, doloremque quasi?
            </li>
            <li className={ptextStyle}>
              Ab saepe minus porro pariatur at nemo animi repellendus
              aspernatur?
            </li>
            <li className={ptextStyle}>
              Nihil unde ducimus placeat fuga nam sunt! Vero, suscipit sint?
            </li>
            <li className={ptextStyle}>
              Recusandae molestias incidunt quisquam excepturi voluptates,
              ratione rerum ullam nostrum!
            </li>
          </ul>
        </p>
        <p className={ptextStyle}>
          <span className={pHeadStyle}>Usage guid:</span> Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Ut vero praesentium consequuntur
          earum quis blanditiis necessitatibus error asperiores adipisci
          corrupti? Ut earum culpa quae eius corporis. Eaque non possimus
          laudantium.
        </p>
        <p className={ptextStyle}>
          <span className={pHeadStyle}>Bugs/Issue: </span>
          <ul className="ptextStyle pl-8 list-decimal">
            <li className={ptextStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, unde?
            </li>
            <li className={ptextStyle}>
              Sequi incidunt voluptas ab, cupiditate provident labore odio
              veniam hic.
            </li>
            <li className={ptextStyle}>
              Eligendi sint optio iusto enim vero ipsa, nam fugit quae!
            </li>
            <li className={ptextStyle}>
              Beatae dicta aperiam a voluptas assumenda, pariatur suscipit. Eos,
              iste.
            </li>
            <li className={ptextStyle}>
              Quae dolorem laborum odio obcaecati dicta ex natus in provident.
            </li>
            To contribute -{" "}
            <a
              className="underline text-blue-500"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/14f5uTmyTSQkpMP4YuER7kv_WaPhy4gCPEb2QQtpEvfs/edit#heading=h.vm051rmyhoww"
            >
              Repo link
            </a>
          </ul>
        </p>
      </div>
      <FeedBack></FeedBack>
    </div>
  );
};

export default ProjectDetail;
