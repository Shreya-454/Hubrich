"use client"
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Leftarrow, Rightarrow } from "./Icon";
const data1 = [
  {
    phase: "1st phase ",
    heading: '"The not-wanting-to-be-true"',
    para:
      "This phase is characterized by denial and ignoring the final separation.",
  },
  {
    phase: "2nd phase ",
    heading: "sales mindset",
    para:
      "Nervousness and feelings of guilt in the sales talk are the reason for poor performance, learn to put them aside and calmly convince your customers.",
  },
  {
    phase: "3rd phase ",
    heading: "CEO Mindset",
    para:
      "Constant stress and enormous pressure as a founder is not normal, but the result of a wrong perspective on productive work. Learn how to get the maximum performance out of yourself without stress.",
  },
  {
    phase: "4th phase ",
    heading: '"The not-wanting-to-be-true"',
    para:
      "This phase is characterized by denial and ignoring the final separation.",
  },
];
const Mindset = () => {
  const slider = React.useRef(null);
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const carddata = data1.map((data1, i) => (
    <div key={i} >
      <h2 className=" font-poppins font-medium text-xl max-sm:text-lg sm:leading-[32px] text-center text-white">
        {data1.phase}
      </h2>
      <h2 className=" font-poppins font-medium  max-sm:text-lg sm:leading-[32px] text-center text-xl text-white">
        {data1.heading}
      </h2>
      <p className="  font-normal sm max-sm:text-sm text-base text-white font-poppins md:pt-4 sm:pt-3 pt-1 text-center">
        {data1.para}
      </p>
    </div>
  ));
  return (
    <div className="pt-[9.5px] pb-[186px] relative z-[1] overflow-y-clip overflow-x-clip max-md:pb-20 max-sm:pb-10" >
      <Image src="/assets/images/svg/mindellipse.svg" alt="ellipse" width={615.54} height={612.28} className=" absolute rotate-[-3.21deg] top-[-49%] left-[-1%] z-[-1] max-sm:hidden
}"/>
      <div className="container max-w-[1140px] px-3 mx-auto 2xl:max-w-[1320px]">
        <div className=" flex justify-end max-sm:hidden">
          <div data-aos="fade-left">
            <div className=" flex justify-end pt-2 mb-[11px]">
              <p className=" font-Poppins text-xl leading-[34px] tracking-[0.045em] text-black font-light -rotate-90 pl-[13px] translate-x-[26px]">
                MJH
              </p>
            </div>
            <div className=" flex justify-end items-end">
              <div className=" flex items-end pt-10 translate-y-2">
                <p className=" uppercase font-hel text-right text-2xl leading-[30.91px] font-normal">
                  analysis
                </p>
                <p className=" font-hel text-[40px] leading-[51.52px] font-normal rotate-90">
                  04
                </p>
              </div>
              <div className=" w-[26px] h-[201.48px] border-b border-r border-solid border-[#F77B0B]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap flex-row -mx-3 pt-7 items-center">
          <div className="lg:w-1/2 w-full px-3" data-aos="fade-right">
            <h3 className=" font-hel text-[29.38px] max-sm:text-2xl sm:leading-[37.84px] font-normal max-lg:text-center">
              THE FOUR PHASES OF
            </h3>
            <h2 className=" font-hel text-[52px] max-sm:text-4xl sm:leading-[62.4px] mb-[19px] max-lg:text-center">
              SEPARATION
              <span className=" text-[#F77B0B]"> MINDSET</span>
            </h2>
            <p className=" font-Poppins max-sm:text-sm text-base text-black opacity-70 sm:leading-[25.6px] pb-9 max-sm:pb-4 max-lg:text-center">
              There are 4 typical separation phases. The 4 phases are not{" "}
              <span className=" block">
                always clearly separated from each other and can overlap.
              </span>
            </p>
            <a href="#">
              <div className="max-lg:flex justify-center">
                <div className="max-w-[452px] h-[59px] bg-btn-gradient rounded-[63px] p-[1.7px] w-full">
                  <div className="w-full h-full group relative after:absolute after:h-full after:bg-btn-gradient after:top-0 after:left-0 after:right-[100%] after:z-[-1] z-[1] hover:after:right-0 overflow-hidden after:duration-300 bg-white rounded-[63px] flex items-center pl-[9px] gap-1 py-[5.83px]">
                    <Image
                      src="/assets/images/svg/chat.svg"
                      alt="chat"
                      width={50.84}
                      height={47.33}
                    />
                    <p className=" font-Inter text-transparent group-hover:text-white duration-300 bg-clip-text bg-btn-gradient font-medium">
                      Book A Non-Binding Initial Consultation Now
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="lg:w-1/2 w-full px-3 max-lg:pt-3" data-aos="zoom-in">
            <div className="bg-[#003D92] relative xl:px-[122px] md:px-20  sm:p-20 px-8 pb-8 pt-20 z-[1] md:pt-32 lg:h-[448px] md:h-[400px] min-h-[300px]">
              <Slider {...settings} ref={slider} className="slider1">
                {carddata}
              </Slider>
              <div className="flex sm:absolute  items-center gap-12 bottom-[5%] left-[-8%]">
                <button className="lg:block hidden" onClick={() => slider?.current?.slickPrev()}>
                 <Leftarrow/>
                </button>
                <button className="lg:block hidden" onClick={() => slider?.current?.slickNext()}>
                   <Rightarrow/>
                </button>
                    </div>
                  <Image src="/assets/images/sliderellipse.webp" width={382} height={249} alt="ellipse1" className="absolute bottom-0 right-0 z-[-1]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mindset;
