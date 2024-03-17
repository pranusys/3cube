import React from "react";
import logo from "../../assets/cube3logo.svg";

const Footer = () => {
  const learnMoreLinks = [
    { name: "About Us", link: "/" },
    { name: "Services", link: "/" },
    { name: "Team", link: "/" },
    { name: "Terms of use", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];
  return (
    <div className="w-full h-auto bg-[#242537] border-white border-t-2 px-[4%] py-[4%]">
      <div className="grid w-full h-full grid-cols-4 ssm:flex ssm:flex-wrap justify-between items-start">
        {/* logo */}
        <div>
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[100px] h-[100px] mt-[30px] ml-[30px]"
            />
          </a>
          <p className="text-white text-[14px] px-[20px]">
            © 2022 3cube. All rights reserved.
          </p>
        </div>
        {/* Get in Touch */}
        <div className="ssm:p-[25px]">
          <div className="h-[50px]">
            <h2 className="text-white text-[24px]">Get in Touch</h2>
          </div>
          <p className="text-white text-[14px] px-[20px] py-[8px] tracking-[2px]">
            THREE CUBE TECHNOLOGIES PVT LTD, Ground Floor, Sivanandam
            Apartments, # 1 B&C, East Park Road, Pulla Avenue, Shenoy Nagar,
            Chennai - 600023
          </p>
          <p className="text-white text-[14px] px-[20px] py-[8px] tracking-[2px]">
            +91-7845468126
          </p>
          <p className="text-white text-[14px] px-[20px] py-[8px] tracking-[2px]">
            care@3cube.in
          </p>
        </div>
        {/* Learn More */}
        <div className="ssm:p-[25px]">
          <div className="h-[50px]">
            <h2 className="text-white text-[24px]">Learn More</h2>
          </div>
          <ul className="list-none flex flex-col">
            {learnMoreLinks.map((link, index) => (
              <li>
                <a
                  href={link.link}
                  key={index}
                  className="text-white text-[14px] px-[20px] py-[8px] tracking-[2px]"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Newsletter */}
        <div className="ssm:p-[25px]">
          <div className="h-[50px]">
            <h2 className="text-white text-[24px]">Our Blog</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
