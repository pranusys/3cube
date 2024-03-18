import React from "react";
import contactBgPic from "../../../assets/home/contactPic.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import emailIcon from "../../../assets/icons/email.svg";
import locationIcon from "../../../assets/icons/location.svg";

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
    <div className="w-full h-auto p-[1%] ssm:flex ssm:flex-col ssm:flex-wrap grid grid-cols-2 relative">
      <img
        src={contactBgPic}
        style={{
          transform: "translate(-50%, -50%)",
        }}
        className="absolute left-[50%] top-[70%] z-[-1]"
        alt="About pic"
      />
      <div className="relative w-full">
        <h1 className="absolute text-[120px] ml-[50px] ssm:text-[55px] ssm:mt-[18%] tracking-[3px] font-bold mt-[15%] text-[#0065A833] break-words">
          CONTACT
        </h1>
        <div className="mt-[30%] mx-[50px]">
          <div className="font-bold text-[35px] ssm:text-[25px] tracking-[1px] ssm:mr-0">
            <h3>Got any questions? Don't hesitate to get in touch.</h3>
          </div>
          <div className="contact-options mt-[30px]">
            {contactOptions.map((option, index) => {
              return (
                <div className="flex justify-start items-center my-[35px]">
                  <div className="h-[35px] w-[35px]">
                    <a href={option.link}>
                      <img
                        src={option.icon}
                        alt="Contact icon"
                        className="w-full h-full"
                      />
                    </a>
                  </div>
                  <div className="w-full h-auto">
                    <p className="text-[#242537] text-[14px] tracking-[1px] ml-[10px]">
                      {option.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full h-full pl-[30%] pr-[15%] ssm:px-[5%] py-[25%] ssm:py-[15%]">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex">
              <input
                type="text"
                placeholder="First name"
                className="w-[100%] h-[50px] border-b-2 border-[#0065A8] p-[10px] my-[15px]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-[100%] h-[50px] border-b-2 border-[#0065A8] p-[10px] my-[15px] ml-[15px]"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-[100%] h-[50px] border-b-2 border-[#0065A8] p-[10px] my-[15px]"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-[100%] h-[50px] border-b-2 border-[#0065A8] p-[10px] my-[15px]"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-[100%] h-[50px] border-b-2 border-[#0065A8] p-[10px] my-[15px]"
            />
            <button
              type="submit"
              className="bg-[#0065A8] text-white w-full my-[10px] px-[12px] py-[8px] rounded-[12px]"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
