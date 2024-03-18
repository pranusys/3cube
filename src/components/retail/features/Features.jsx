import React from "react";
// import serviceAndSupportImg from '../../../assets/enterprise/serviceAndSupport.svg';
// import rightArrow from '../../../assets/enterprise/icons/rightArrow.svg';
// import leftArrow from '../../../assets/enterprise/icons/leftArrow.svg';
// import rightArrow from '../../../assets/icons/rightArrowWhite.svg';
// import leftArrow from '../../../assets/icons/leftArrowWhite.svg';

const Features = () => {
  const features = [
    {
      bgColor: "#242537",
      bgImg: "",
      content: (
        <div className="w-full h-full ssm:p-[12px] flex flex-col justify-center p-[25px] text-left text-white">
          <h2 className="font-bold text-[20px] py-[6px] tracking-[1px] ssm:text-[20px] ">
            Engage Meaningful with their employees
          </h2>
          {/* <p className='font-bold text-[20px] py-[6px] ssm:text-[20px]'>Best-in-class devices to help your teams do their best work</p> */}
          <div className="border-l-2 border-[grey]">
            <p className=" text-[14px] py-[6px] text-justify px-[10px]">
              We prioritize employee engagement, creating an inclusive,
              supportive environment for open communication, professional
              development, and collaboration. Our commitment to motivation and
              empowerment drives company growth.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgColor: "#D9D9D9",
      bgImg: "",
      content: (
        <div className="w-full h-full ssm:p-[12px] flex flex-col justify-center p-[25px] text-left text-black">
          <h2 className="font-bold text-[20px] py-[6px] tracking-[1px] ssm:text-[20px] ">
            Reduce Employee Attrition
          </h2>
          {/* <p className='font-bold text-[20px] py-[6px] ssm:text-[20px]'>Best-in-class devices to help your teams do their best work</p> */}
          <div className="border-l-2 border-[grey]">
            <p className=" text-[14px] py-[6px] text-justify px-[10px]">
              We prioritize employee retention, offering competitive
              compensation, continuous learning opportunities, and a supportive
              work culture to reduce attrition and ensure client satisfaction.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgColor: "#242537",
      bgImg: "",
      content: (
        <div className="w-full h-full ssm:p-[12px] flex flex-col justify-center p-[25px] text-left text-white">
          <h2 className="font-bold text-[20px] py-[6px] tracking-[1px] ssm:text-[20px] ">
            Enhance employee performance
          </h2>
          {/* <p className='font-bold text-[20px] py-[6px] ssm:text-[20px]'>Best-in-class devices to help your teams do their best work</p> */}
          <div className="border-l-2 border-[grey]">
            <p className=" text-[14px] py-[6px] text-justify px-[10px]">
              We prioritize employee engagement, creating an inclusive,
              supportive environment for open communication, professional
              development, and collaboration. Our commitment to motivation and
              empowerment drives company growth.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgColor: "#D9D9D9",
      bgImg: "",
      content: (
        <div className="w-full h-full text-black flex flex-col justify-center p-[25px] text-left">
          <h2 className="font-bold text-[22px] ssm:text-[20px] py-[6px] tracking-[1px] ">
            Our Support
          </h2>
          <div className="border-l-2 border-[grey]">
            <p className="text-[14px] py-[6px] text-justify px-[10px]">
              3Cube Technologies prioritizes post-sale support, building trust
              and reliability to ensure clients' positive experiences with their
              products or services, fostering enduring partnerships for
              sustained satisfaction and success.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgColor: "#242537",
      bgImg: "",
      content: (
        <div className="w-full text-white h-full flex flex-col justify-center p-[25px] text-left">
          <h2 className="font-bold text-[22px] py-[6px] tracking-[1px] ssm:text-[20px]">
            Certification
          </h2>
          <p className="font-bold text-[22px] py-[6px] ssm:text-[20px]">
            Best-in-class devices to help your teams.
          </p>
          <div className="border-l-2 border-[grey]">
            <p className="text-[14px] py-[6px] text-justify px-[10px]">
              Our team boasts numerous certifications in finance, technology,
              and security, demonstrating our commitment to excellence and
              industry trends, ensuring innovative solutions consistently exceed
              client expectations.
            </p>
          </div>
        </div>
      ),
    },
    {
      bgColor: "#D9D9D9",
      bgImg: "",
      content: (
        <div className="w-full h-full text-black flex flex-col justify-center p-[25px] text-left">
          <h2 className="font-bold text-[22px] py-[6px] tracking-[1px] ">
            Integration
          </h2>
          <div className="border-l-2 border-[grey]">
            <p className="text-[14px] py-[6px] text-justify px-[10px]">
              We specialize in enhancing efficiency and productivity by
              seamlessly connecting various technologies, systems, and
              processes, simplifying workflows, improving data flow, and
              creating a unified ecosystem.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full h-auto bg-[#242537] overflow-auto">
      <div className="grid grid-cols-3 ssm:flex ssm:flex-wrap justify-center items-center">
        {features.map((feature, index) => {
          return (
            <div>
              <div
                className="h-[340px] ssm:w-[330px]"
                style={{
                  backgroundColor: feature.bgColor ?? "",
                  backgroundImage: `url(${feature.bgImg})` ?? "",
                  backgroundPosition: feature.bgImg ? "center" : "",
                  backgroundSize: feature.bgImg ? "cover" : "",
                  backgroundRepeat: feature.bgImg ? "no-repeat" : "",
                }}
              >
                {feature.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
