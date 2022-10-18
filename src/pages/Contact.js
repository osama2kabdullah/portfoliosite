import EmailJSResponseStatus from "@emailjs/browser";
import React from "react";
import HelmetMe from "./shared/HelmetMe";

const Contact = () => {
  const inputStyle = "lg:p-3 p-2 lg:text-xl text-md rounded-lg";
  
  const sendMessage = e => {
    e.preventDefault();
    
    EmailJSResponseStatus.sendForm('service_9grfslc', 'template_s3kn428', e.target, 'bjpPddRjt83gulhRB')
    .then(res=>{
      if(res.status === 200){
        e.target.reset();
      }
    }).then(err=>{
      console.log(err)
    });
  }
  
  return (
    <div>
      <HelmetMe>Contact</HelmetMe>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="lg:w-32 w-16 mx-auto lg:h-32 mb-12 h-16"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
      <form onSubmit={sendMessage} className="grid lg:gap-12 gap-5 lg:w-3/6 w-5/6 mx-auto pb-12">
        <div className="grid lg:grid-cols-2 lg:gap-12 gap-5">
          <div className="grid">
            <label htmlFor="name" className="text-xl mb-3">
              Name
            </label>
            <input
              autoComplete="off"
              className={inputStyle}
              type="name"
              name="name"
              id=""
            />
          </div>
          <div className="grid">
            <label htmlFor="email" className="text-xl mb-3">
              Email
            </label>
            <input
              autoComplete="off"
              className={inputStyle}
              type="email"
              name="email"
              id=""
            />
          </div>
        </div>
        <div className="grid">
          <label htmlFor="message" className="text-xl mb-3">
            Message
          </label>
          <textarea
            className={inputStyle}
            name="message"
            id=""
            rows="3"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Send"
          className="w-fit px-16 mx-auto rounded-full hover:bg-black hover:text-white cursor-pointer text-xl py-3"
        />
      </form>
    </div>
  );
};

export default Contact;
