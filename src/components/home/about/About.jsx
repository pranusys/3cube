import React from "react";
import aboutPic from "../../../assets/home/aboutpic.svg";
// import "./About.css";

const About = () => {
  return (
    <div className="w-full h-auto p-[5%] ssm:p-[2%] grid grid-cols-2 ssm:flex ssm:flex-wrap">
      <div>
        <h1 className="absolute text-[100px] ml-[50px] ssm:text-[75px] font-[900] mt-[8%] text-[#00000026] lsm:mt-[14%] lsm:text-[55px]">
          About Us
        </h1>
        <div className="mt-[30%] mx-[50px]">
          <div className="font-bold text-[30px] tracking-[1px]">
            <h3 className="text-[35px] ssm:text-[28px]">
              We are Skilled in Providing Superior Service.
            </h3>
          </div>
          <p className="text-justify my-[15px] text-[14px]">
            At 3Cube Technologies, we pride ourselves on being a team of
            chartered accountants with a combined banking experience of over 35
            years in leading multinational banks. Our expertise spans across
            various facets of the financial industry, including corporate and
            transactional banking, operations, mid and small-market products,
            sales, mortgage sales, credit underwriting, and wealth management.
            With such a diverse and extensive background, we understand the
            intricate needs of businesses and individuals in today's
            ever-evolving financial landscape.
          </p>
          <a href="/">
            <button className="border-2 border-[#242537] p-[8px] my-[20px] text-[#242537]">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <img src={aboutPic} alt="About pic" />
      </div>
    </div>
  );
};

export default About;
