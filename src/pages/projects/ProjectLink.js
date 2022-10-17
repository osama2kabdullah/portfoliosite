import React from 'react';

const ProjectLink = ({children, d }) => {
    const buttonStyle =
    "px-3 rounded-full border-2 border-black hover:bg-black hover:text-white";
    return (
        <button className={buttonStyle}>
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
                  d={d}
                />
              </svg>
              {children}
            </button>
    );
};

export default ProjectLink;