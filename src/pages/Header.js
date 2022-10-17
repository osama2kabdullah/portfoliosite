import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const linksStyle = "text-primary hover:text-4xl lg:text-5xl text-3xl";
  return (
    <nav className="flex justify-between lg:p-12 p-6">
      <p className="font-primary lg:text-2xl text-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 inline h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>{" "}
        abdullah21673@hotmail.com
      </p>
      <p>
        <svg
          onClick={() => setOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="lg:w-12 cursor-pointer  w-8 lg:h-12 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={open ? "M19.5 12h-15" : "M3.75 9h16.5m-16.5 6.75h16.5"}
          />
        </svg>
      </p>

      <div
        style={open ? { display: "flex" } : { display: "none" }}
        className="fixed text-white bg-black-rgba h-screen w-full top-0 left-0 flex flex-col gap-12 justify-center items-center"
      >
        <p className="fixed lg:right-12 right-6 lg:top-12 top-6">
          <svg
            onClick={() => setOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="lg:w-12 text-white cursor-pointer w-8 lg:h-12 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M19.5 12h-15" : "M3.75 9h16.5m-16.5 6.75h16.5"}
            />
          </svg>
        </p>
        <Link onClick={() => setOpen(false)} to="/" className={linksStyle}>
          About
        </Link>
        <Link onClick={() => setOpen(false)} to="/works" className={linksStyle}>
          Works
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to="/contact"
          className={linksStyle}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};
export default Header;
