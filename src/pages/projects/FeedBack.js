import React from "react";

const FeedBack = () => {
  const inputStyle = "lg:p-3 p-2 lg:text-xl text-md rounded-lg";
  return (
    <section className="mt-12">
      <div className="border-t-2 py-3">
        <h1 className="text-3xl text-center font-primary  text-gray-500">
          Feedback
        </h1>
        <form className="grid lg:gap-12 gap-5  mb-12">
          <div className="grid lg:w-3/6">
            <label htmlFor="email" className="lg:text-xl text-lg mb-3">
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
          <div className="grid">
            <label htmlFor="message" className="lg:text-xl text-lg mb-3">
              Feedback
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
            value="Give feedback"
            className="w-fit lg:px-16 px-8 rounded-full hover:bg-black hover:text-white cursor-pointer lg:text-xl text-lg py-3"
          />
        </form>
      </div>
    </section>
  );
};

export default FeedBack;
