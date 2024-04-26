import React from "react";
import Image from "next/image";
import { Arrow } from "./Icon";
const Lawyer = () => {
  return (
    <div className=" relative z-[1]  overflow-x-clip">
      <div className="container max-w-[1140px] mx-auto px-3 2xl:max-w-[1320px]">
        <div className="pt-3 max-sm:hidden" data-aos="fade-right">
          <div className="flex items-end">
            <div className="h-[167.37px] w-[26px] border-l-2 border-b-2 border-solid border-[#F77B0B]"></div>
            <div className=" flex items-end translate-y-3">
              <p className=" font-hel text-[40px] leading-[51.52px] -rotate-90">
                05
              </p>
              <p className=" uppercase font-hel text-2xl leading-[30.91px] font-normal">
                about
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap -mx-3 pt-[52.13px]">
          <div className="lg:w-1/2 w-full px-3 flex justify-center">
            <Image
              src="/assets/images/img1.webp"
              alt="img"
              width={559}
              height={574}
              data-aos="zoom-in"
            />
          </div>
          <div className="lg:w-1/2 w-full px-3 flex justify-center lg:justify-end" data-aos="fade-left">
            <div className="lg:pl-8">
              <h2 className=" font-hel text-[52px] max-sm:text-4xl font-normal sm:leading-[66.98px] max-lg:text-center">
                LAWYER <span className=" text-[#F77B0B]">&</span> DIVORCE COACH
              </h2>
              <h3 className=" font-hel text-black text-[36.96px] max-sm:text-[28px] uppercase sm:leading-[47.61px] pb-[30px] max-sm:pb-3 max-lg:text-center">
                <span className="text-[#F77B0B]">M</span>arc{" "}
                <span className="text-[#F77B0B]">J</span>oachim{" "}
                <span className="text-[#F77B0B]">H</span>ubrich
              </h3>
              <p className=" font-hel text-xl max-sm:text-lg font-normal text-black mb-3 max-lg:text-center">
                About The Mindset Agency Coach
              </p>
              <p className=" font-Poppins text-black max-sm:text-sm text-base opacity-70 sm:leading-[25.6px] pb-[35.22px] max-lg:text-center">
                Marc J. Hubrich is the founder of the mindset agency{" "}
                <span className="sm:block">
                  specializing in consulting services.
                </span>
              </p>
              <div className=" max-lg:flex justify-center">
                <a href="#">
                  <div className=" max-w-[350px] w-full bg-btn-gradient h-[56px] rounded-full p-[1.7px]">
                    <div className="bg-white relative after:absolute group after:bg-btn-gradient after:top-0 after:bottom-0 after:left-0 after:right-[100%] hover:after:right-0 after:duration-300 after:z-[-1] z-[1] overflow-hidden w-full h-full rounded-full flex items-center py-4 px-6 gap-3">
                      <p className=" text-transparent group-hover:text-white duration-300 bg-btn-gradient bg-clip-text font-Inter font-medium max-sm:text-sm text-base">
                        Learn More About The Agency
                      </p>
                      <Arrow />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-[7%] bottom-[-28%] max-sm:hidden max-md:bottom-[-3%]" data-aos="fade-left">
          <div className="flex justify-end translate-x-5 mb-[11px]">
            <p className="font-Poppins text-xl leading-[34px] text-center -rotate-90 tracking-[0.04em]">MJH</p>
          </div>
          <div className=" flex items-end justify-end">
            <p className=" font-hel text-[40px] rotate-90 leading-[51.52px] font-normal translate-y-4">06</p>
<div className="h-[201.48px] w-[26px] border-r border-b border-solid border-[#F77B0B]"></div>
          </div>
        </div>
      </div>
      <Image src="/assets/images/svg/lawyerellipse.svg" alt="ellipse" width={738} height={211.63}  className="absolute z-[-1] rotate-[-2.88deg] right-0 bottom-[-2%]"/>
    </div>
  );
};

export default Lawyer;
