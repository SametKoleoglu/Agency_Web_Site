import React from "react";

// icons
import { CiMobile3 } from "react-icons/ci";
import { GiCompanionCube } from "react-icons/gi";
import { SiTesla } from "react-icons/si";

const Products = () => {
  return (
    <div>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <CiMobile3 size={250} />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolores quibusdam fugiat esse eius sunt perferendis nemo,
              accusamus minus quasi repellendus quod, consequatur est ducimus
              rerum sequi quaerat voluptatum tenetur.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="testimonial">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3 items-center ml-10">
            <SiTesla size={230} color="green" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                assumenda pariatur nobis, eum repellendus harum blanditiis nisi
                soluta eius quae quo laudantium in, dolore enim, esse laboriosam
                error? Assumenda, laborum.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap ">
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <GiCompanionCube size={30} className="cursor-pointer" />
                  <div className="flex items-center gap-10">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700 "
                    >
                      Meet all customers{" "}
                      <svg
                        xmlns="https://www.w3.org/2000/svg"
                        width={15}
                        height={10}
                        viewBox="0 0 15 10"
                        fill="none"
                        className="inline-block ml-2"
                      >
                        <path d="" stroke="#4CAF4F" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
