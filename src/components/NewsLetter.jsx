import React from "react";

const NewsLetter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center ">
          <h2 className="lg:text-5xl text-3xl text-neutral font-semibold mb-6 lg:leading-snug">
            How to design your site footer like we did
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary text-white">
              Get a Demo
              <svg
                xmlns="http://www.w3.org./2000/svg"
                width={14}
                height={8}
                viewBox="0 0 14 8"
                fill="none"
                className="inline-block ml-2"
              >
                <path d="" stroke="#fff" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
