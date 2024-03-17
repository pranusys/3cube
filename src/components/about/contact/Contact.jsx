import React from "react";
import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/email.svg";
import locationIcon from "../../../assets/icons/location.svg";
import contactPic from "../../../assets//about/contactPic.png";

const Contact = () => {
  const contactOptions = [
    {
      icon: phoneIcon,
      desc: "+91 7845468126",
      link: "tel:+91-7845468126",
    },
    {
      icon: emailIcon,
      desc: "care@3cube.in",
      link: "mailto:care@3cube.in",
    },
    {
      icon: locationIcon,
      desc: `THREE CUBE TECHNOLOGIES PVT LTD, Ground Floor, Sivanandam Apartments, 
            # 1 B&C, East Park Road, Pulla Avenue, Shenoy Nagar, Chennai - 600023`,
      link: "/",
    },
  ];

  return (
    <div className="w-full h-auto p-[1%] grid grid-cols-2 ssm:flex ssm:flex-wrap relative overflow-auto">
      <div className="w-full h-full p-[15%] ssm:p-[2%]">
        <div>
          <img
            src={contactPic}
            alt="contact pic"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div>
        <div className="mt-[30%] mx-[50px]">
          <div className="relative mr-[10%] ssm:mr-0 tracking-[1px]">
            <h2 className="absolute text-[38px] ssm:text-[25px] font-bold top-[-25%] ssm:top-[-75%] text-[#b7d8f7c4]">
              Request for Free Consultation
            </h2>
            <h3 className="font-bold text-[35px] ssm:text-[25px] relative z-[1] text-black">
              Help your Business to get on a New Stage!
            </h3>
          </div>
          <div className="contact-options mt-[30px] ssm:mt-0">
            {contactOptions.map((option, index) => {
              return (
                <div className="flex justify-start items-center my-[35px] text-justify">
                  <div className="w-[35px] h-[35px]">
                    <a href={option.link}>
                      <img
                        src={option.icon}
                        alt="icon"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <div className="w-full h-auto ">
                    <p className="text-[14px] tracking-[1px] ml-[10px]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
