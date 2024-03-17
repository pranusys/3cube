import React from "react";
import providingServiceBg from "../../../assets/about/providingservice.png";

const ProvidingService = () => {
  return (
    <div className="w-full h-auto p-[3%] grid grid-cols-2 ssm:flex ssm:flex-col-reverse bg-[#242537] ssm:flex-wrap">
      <div className="relative z-[1] mt-[20%] ml-[15%] ssm:ml-0 ">
        <div className="w-[90px] h-[90px] z-[-1] top-[-5%] absolute rounded-[50%] bg-[#0065A8]"></div>
        <h2 className="text-white text-[35px] ssm:text-[28px] tracking-[1px] font-bold">
          Providing Service
        </h2>
        <p className="text-[14px] py-[12px] text-white text-justify pr-[30%] ssm:pr-0">
          With 35+ years of experience in multinational banks, offers a
          comprehensive range of financial services, aiming to exceed client
          expectations and remain a trusted partner in the ever-evolving
          financial landscape.
        </p>
        <div className="flex flex-wrap">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-[8px] my-[20px] w-[50%] ssm:w-[100%] ssm:mr-0"
          />
          <button className="p-[8px] my-[20px] text-white bg-[#0065A8] ssm:w-[100%] ssm:ml-0">
            Submit
          </button>
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src={providingServiceBg}
          alt="About pic"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default ProvidingService;
