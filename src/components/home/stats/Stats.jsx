import React from "react";
import quotationPic from "../../../assets/icons/quotation.svg";
import businessImgPic from "../../../assets/home/businessImgPic.svg";
import arrowLinkIcon from "../../../assets/icons/linkArrowIcon.svg";

const Stats = () => {
  const links = [
    {
      index: "01",
      name: "Enterprise Business",
      link: "/enterprise-business",
      img: businessImgPic,
    },
    {
      index: "02",
      name: "Retail Business",
      link: "/retail-business",
      img: businessImgPic,
    },
  ];

  const rightStats = [
    {
      count: 1,
      header: "Our purpose",
      desc: "users - from new startups to public companies",
    },
    {
      count: 2,
      header: "Anywhere, anytime work culture",
      desc: "users - from new startups to public companies",
    },
    {
      count: 3,
      header: "High Talent Retention cost",
      desc: "users - from new startups to public companies",
    },
    {
      count: 4,
      header: "Limited HR Expertise",
      desc: "users - from new startups to public companies",
    },
  ];

  return (
    <div className="w-full h-auto p-[2%] ssm:flex ssm:flex-wrap grid grid-cols-2">
      {/* left */}
      <div>
        <div className="mx-[12%] my-[12%] relative">
          <img
            src={quotationPic}
            alt="Stats pic"
            className="w-[80px] h-[65px] absolute z-[-1] top-[20%]"
          />
          <h2 className="text-[35px] ssm:text-[28px] tracking-[1px] font-bold text-black">
            It's all about speed
          </h2>
          {/* <p className='py-[12px] text-[14px] ssm:text-[14px] text-black text-justify'>
                        We provide you with a test account that can be set up in 
                        seconds. Our main focus is getting responses to you as 
                        soon as we can.
                    </p> */}
          <p className="py-[35px] text-[14px] ssm:text-[14px] text-black text-justify">
            Our commitment to efficiency and quality ensures swift approvals,
            financial solutions, and streamlined processes, empowering clients
            to meet their financial goals promptly and efficiently.
          </p>
          <div className="links flex flex-col w-full">
            {links.map((link) => (
              <a href={link.link}>
                <div className="flex flex-row ssm:mr-[15%] mr-[25%] ssm:justify-center justify-between items-center p-[15px] border-t-2 border-black">
                  <div>
                    <h3 className="font-bold text-[14px]">{link.index}</h3>
                  </div>
                  <div className="flex w-[290px]">
                    <img
                      src={link.img}
                      alt="Link icon"
                      className="w-[45px] h-[45px] mr-[10px]"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-[18px] ssm:text-[14px]">
                        {link.name}
                      </p>
                      <p className="text-[14px] ssm:text-[14px]">{link.name}</p>
                    </div>
                  </div>
                  <div>
                    <img
                      src={arrowLinkIcon}
                      alt="Arrow link icon"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* right */}
      <div className="p-[2%] flex justify-center items-center ">
        <div className="grid grid-cols-2 ssm:flex ssm:flex-wrap w-full mx-[12%] p-[12px]">
          {rightStats.map((stat) => {
            return (
              <div className="mx-[8px] my-[8px]">
                <div className="h-[55px] ssm:h-auto">
                  <h2 className="text-[20px] ssm:text-[18px] font-bold">
                    {stat.header}
                  </h2>
                </div>
                <p className="text-[14px] py-[10px]">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
