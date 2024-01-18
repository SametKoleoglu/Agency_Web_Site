import React from "react";
import aboutImg from "../assets/about_1.jpg";
import { GoPeople } from "react-icons/go";
import { RiCommunityLine } from "react-icons/ri";
import { SiEventstore } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";

const About = () => {
  return (
    <div>
      {/* About Text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <img src={aboutImg} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              The unseen of spending three years at Pixelgrade
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
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local
              <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              dolores quibusdam
            </p>
            <button className="btn-primary">Learn More</button>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-10">
            <div className="space-y-8 ">
              <div className="flex items-center gap-5">
                <GoPeople color="green" size={30} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    200
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <SiEventstore color="green" size={30} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    200
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 ">
              <div className="flex items-center gap-5">
                <MdOutlinePayments color="green" size={30} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    200
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <RiCommunityLine color="green" size={30} />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    200
                  </h4>
                  <p>Community</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
