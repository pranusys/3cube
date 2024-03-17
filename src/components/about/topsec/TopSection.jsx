import React from "react";

import Navbar from "../../navbar/Navbar";
import playBtn from "../../../assets/enterprise/icons/playBtn.svg";
import bgImgPic from "../../../assets/about/bgImgPic.svg";
// import "../../../styles/about/topsection/topsection.css";

const TopSection = () => {
  return (
    <div className="w-full h-[90vh]">
      <Navbar />
      <img
        src={bgImgPic}
        alt="bgImgPic"
        className="absolute right-0 top-0 z-[-1] h-[600px]"
      />
      <div className="w-[40%] mt-[10%] ml-[10%] ssm:w-[95%] relative ssm:mt-[30vh] ssm:bg-[#c8cacb] ssm:rounded-[15px] ssm:p-[12px] ssm:mx-auto">
        <div className="w-[90px] h-[90px] z-[-1] absolute rounded-[50%] bg-[#99c4e1]"></div>
        <h2 className="text-[50px] ssm:text-[28px] font-[900]">
          <b className="text-black">About Our</b>
          <b className="text-[#0065A8]">&nbsp;Business</b>
        </h2>
        <p className="text-[14px] ssm:text-[14px] py-[12px] text-black">
          Nobody understands loans and financial needs better than us. With
          3cube Technologies, you can always have the emergency financial
          support you need.
        </p>
        <div className="flex ssm:flex-wrap">
          <button
            className="rounded-[18px] ssm:ml-[15px] w-[130px] text-[14px] mt-[7%] bg-[#0065A8] text-white p-[8px]"
            style={{ border: "none" }}
          >
            <a href="/">Learn More</a>
          </button>
          <button
            className="bg-transparent text-[14px] ml-[15px] mt-[7%] p-[8px] bg-black rounded-[18px] text-black flex"
            style={{ border: "none" }}
          >
            <a href="/" className="flex">
              <img src={playBtn} alt="playBtn" className="w-[25px] h-[25px]" />
              <p>&nbsp;Start Demo</p>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
