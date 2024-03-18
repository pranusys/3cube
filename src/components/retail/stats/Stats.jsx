import React from "react";
import quotationPic from "../../../assets/icons/quotationDark.svg";
import businessImgPic from "../../../assets/home/businessImgPic.svg";
import arrowLinkIcon from "../../../assets/icons/linkArrowIcon.svg";

const Stats = () => {
  const links = [
    {
      index: "01",
      name: "Enterprise Business",
      desc: "Enterprise Business",
      link: "/enterprise-business",
      img: businessImgPic,
    },
    {
      index: "02",
      name: "Retail Business",
      desc: "Retail Business",
      link: "/retail-business",
      img: businessImgPic,
    },
  ];

  const leftStats = [
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
    <div className="w-full h-auto p-[2%] grid grid-cols-2 ssm:flex ssm:flex-wrap bg-[#242537] text-white">
      {/* left */}
      <div className="p-[2%] flex ssm:flex-wrap justify-center items-center">
        <div className="grid grid-cols-2 ssm:flex ssm:flex-wrap w-full mx-[8%] p-[12px]">
          {leftStats.map((stat) => {
            return (
              <div className="mx-[8px] my-[10px]">
                <div className="h-[60px] ssm:h-auto ssm:py-[8px]">
                  <h2 className="text-[22px] font-bold">{stat.header}</h2>
                </div>
                <p className="text-[14px] py-[10px]">{stat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* right */}

      {/*  */}
      <div>
        <div className="mx-[12%] my-[10%] relative">
          <img
            src={quotationPic}
            alt="Stats pic"
            className="w-[80px] h-[65px] absolute z-[1] top-[-15%]"
          />
          <h2 className="text-[35px] ssm:text-[28px] tracking-[1px] font-bold text-white">
            It's all about our <b className="text-[#0065A8]">Offers</b>
          </h2>
          <p className="py-[12px] text-[14px] text-white text-justify">
            We offer customized financial solutions, focusing on client needs
            and ensuring a smooth financial journey with flexible loan terms,
            expedited approvals, and comprehensive guidance.
          </p>

          <div className="links flex flex-col w-full mt-[18px]">
            <p className="text-[#0065A8] text-[14px] p-[8px]">Latest Addons</p>
            {links.map((link) => (
              <a href={link.link}>
                <div className="flex flex-row mr-[25%] ssm:mr-[5%] justify-between items-center p-[15px] ssm:p-[8px] border-t-2 border-white">
                  <div className="ssm:w-[40px]">
                    <p className="font-bold text-[18px]">{link.index}</p>
                  </div>
                  <div className="flex w-[290px]">
                    <img
                      src={link.img}
                      alt="Link icon"
                      className="w-[45px] h-[45px] mr-[10px]"
                    />
                    <div className="flex flex-col">
                      <p className="font-bold text-[14px]">{link.name}</p>
                      <p className="text-[14px]">{link.desc}</p>
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
    </div>
  );
};

export default Stats;
