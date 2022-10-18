import React from "react";
import HelmetMe from "../shared/HelmetMe";
import Projects from "./Projects";

const Work = () => {
  return (
    <section className="">
      <HelmetMe>Works</HelmetMe>
      <div
        style={{ gridTemplateColumns: "repeat(3, 1fr)", alignItems: "center" }}
        className="grid dark:bg-dark-bg bg-light-bg"
      >
        <div className="dark:bg-light-bg bg-dark-bg h-[1px]"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="lg:w-32 w-16 dark:text-dark-text text-light-text mx-auto lg:h-32 h-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>
        <div className="dark:bg-light-bg bg-dark-bg h-[1px]"></div>
      </div>
      <div className="grid dark:bg-dark-bg bg-light-bg gap-12">
        <Projects></Projects>
      </div>
    </section>
  );
};

export default Work;
