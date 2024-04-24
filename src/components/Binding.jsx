import React from "react";
import Image from "next/image";
const myArray = [
  {
    text: "How do I let go of my EX so I can finally leave him behind?",
  },
  {
    text: "How does the divorce process work?",
    class: "!max-w-[196.88px]",
  },
  { text: "Do I need a lawyer?" },
];
const myArray2 = [
  {
    text: "How much will the divorce cost?",
  },
  {
    text: "What will happen to my children?",
    class: "!max-w-[196.02px]",
  },
  {
    text: "What does my future as a single person look like now?",
  },
  {
    text: "How do I rebuild my self-esteem?",
  },
];
const Binding = () => {
  const card1 = myArray.map((myArray, i) => (
    <div key={i} className="lg:w-1/3 md:w-1/2 w-full flex justify-center max-lg:mb-5" >
      <div className="w-full bg-[#FFFFFF26] max-lg:max-w-[250px] h-[200px] backdrop-blur flex justify-center items-center hover:bg-[#003E92] duration-300" data-aos="zoom-in">
        <p
          className={` ${myArray.class} text-white font-Poppins text-base max-sm:text-sm leading-[25.6px] font-normal max-w-[173px]`}
        >
          {myArray.text}
        </p>
      </div>
    </div>
  ));
  const card2 = myArray2.map((myArray2, e) => (
    <div key={e} className="lg:w-1/4 md:w-1/2 w-full flex justify-center max-lg:mb-5">
      <div className="w-full max-lg:max-w-[250px] bg-[#FFFFFF26] h-[200px] backdrop-blur flex justify-center items-center hover:bg-[#003E92] duration-300" data-aos="zoom-in">
        <p
          className={`text-white font-Poppins max-sm:text-sm text-base sm:leading-[25.6px] font-normal max-w-[173px] ${myArray2.class}`}
        >
          {myArray2.text}
        </p>
      </div>
    </div>
  ));
  return (
    <div className=" overflow-x-clip">
      <div className="bg-[#F2F8FF] pt-[71.44px] max-sm:pt-10">
        <div className="max-w-[1140px] container mx-auto px-3 2xl:max-w-[1320px] pb-[59.56px] max-sm:pb-5">
          <div className="flex flex-wrap flex-row -mx-3 items-center ">
            <div className="lg:w-7/12 w-full px-3" data-aos="fade-right">
              <h2 className=" uppercase font-hel max-lg:text-center max-sm:text-4xl text-[52px] font-normal sm:leading-[66.98px]">
                Request your{" "}
                <span className="sm:block ">
                  <span className="text-[#F77B0B]">non-binding</span> strategy
                </span>{" "}
                meeting now!
              </h2>
            </div>
            <div className="lg:w-5/12 w-full px-3 flex lg:justify-end justify-center" data-aos="fade-left">
              <div>
                <p className="max-w-[398.18px] max-lg:text-center font-Poppins text-base max-sm:text-sm sm:leading-[25.6px] after:absolute relative after:top-[8px] after:bottom-[8px] after:bg-[#9800B0] after:w-[2px] after:left-[-14.31px]">
                  Click on the button below, choose an appointment and answer
                  the questions truthfully. One of our strategy consultants will
                  then contact you and conduct your free consultation. We can
                  advise you on the following topics:{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(/assets/images/bindbg.webp)] bg-cover bg-no-repeat bg-center pt-[111px] pb-[186px] max-sm:py-10 max-md:py-20">
        <div className="container max-w-[1140px] mx-auto px-3 2xl:max-w-[1320px]">
          <div className="max-w-[750px] mx-auto lg:mb-[34px]">
            <div className="flex flex-wrap flex-row justify-center">{card1}</div>
          </div>
          <div className="max-w-[1000px] mx-auto mb-[58px] max-sm:mb-8">
            <div className="flex flex-wrap flex-row">{card2}</div>
          </div>
          <a href="#" data-aos="fade-up">
            <div className="max-w-[452px] w-full h-[59px] bg-btn-gradient mx-auto rounded-full p-[1.7px]">
              <div className="w-full relative group after:absolute after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 after:z-[-1] z-[1] after:bg-btn-gradient after:duration-300 overflow-hidden h-full bg-white rounded-full flex  gap-1 items-center pl-[9px] py-[5.83px]">
              <Image
                      src="/assets/images/svg/chat.svg"
                      alt="chat" 
                      width={50.84} 
                      height={47.33}
                    />
                    <p className=" group-hover:text-white duration-300 font-Inter text-transparent max-sm:text-sm text-base bg-clip-text bg-btn-gradient font-medium">
                      Book A Non-Binding Initial Consultation Now
                    </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Binding;
