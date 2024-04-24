import React from "react";
import Nav from "./Nav";
import Image from "next/image";
const Header = () => {
  return (
    <div className="xl:bg-[url(/assets/images/Herobg.webp)] bg-[url(/assets/images/heroimg.webp)] min-h-screen bg-cover bg-center xl:bg-right bg-no-repeat relative  xl:after:h-0 flex flex-col z-[1] after:w-full after:h-full after:bg-white after:absolute after:top-0 after:left-0 after:z-[-1] after:opacity-80 overflow-x-clip max-sm:pb-10">
      <Image src="/assets/images/svg/headellipse.svg" alt="ellipse" width={615.54} height={612.28} className="absolute top-[-29%] left-[-12%] rotate-[-23.21deg] z-[-1]"/>
      <Nav />
      <div className=" flex flex-grow items-center">
        <div className="container max-w-[1140px] px-3 mx-auto 2xl:max-w-[1320px] h-full">
          <div className="flex flex-row flex-wrap -mx-3 h-full">
            <div className="lg:w-1/2  w-full px-3" data-aos="zoom-in">
              <p className="text-[#F77B0B] font-hel text-[18.8px] max-sm:text-base max-lg:text-center sm:leading-[24.22px]">
                Marc Joachim Hubrich
              </p>
              <h1 className=" text-black text-6xl max-sm:text-[40px] max-lg:text-center font-hel uppercase font-normal sm:leading-[77.28px]">
                Now I let you
                <span className="block">go!</span>
              </h1>
              <p className=" text-base max-sm:text-sm font-Poppins sm:leading-[25.6px] text-black max-lg:text-center opacity-70 pt-2 pb-8">
                For women who do not want to be completely dragged down by{" "}
                <span className="lg:block">a SEPARATION.</span>
                How to let go of your EX so you can leave him behind without{" "}
                <span className=" lg:block">
                  having to run to a therapist right away.
                </span>
              </p>
              <div className=" sm:flex items-center gap-[17px] max-lg:justify-center">
                <a href="#" className="w-full max-w-[452px]">
                  <div className="max-sm:flex justify-center">
                    <div className="max-w-[452px] h-[59px] bg-btn-gradient rounded-[63px] p-[1.7px] w-full">
                      <div className="w-full h-full bg-white after:absolute relative group after:h-full after:top-0 after:left-0 after:right-[100%] hover:after:right-0 duration-300 after:duration-300 overflow-hidden z-[1] after:z-[-1] after:bg-btn-gradient group rounded-[63px] flex items-center pl-[9px] gap-1 py-[5.83px]">
                        <Image
                          src="/assets/images/svg/chat.svg"
                          alt="chat"
                          width={50.84}
                          height={47.33}
                        />
                        <p className=" font-Inter text-base group-hover:text-white max-sm:text-sm text-transparent duration-300 bg-clip-text bg-btn-gradient font-medium">
                          Book A Non-Binding Initial Consultation Now
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="tel:2372979323">
                  <div className=" max-sm:flex justify-center max-sm:mt-6 hover:animate-wiggle">
                    <Image
                      src="/assets/images/svg/phone.svg"
                      alt="call"
                      width={42.34}
                      height={42.34}
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-3 flex lg:items-end max-lg:justify-center" data-aos="zoom-in">
              <div className="flex gap-16 xl:translate-y-24 2xl:translate-y-32 lg:ml-12 sm:ml-5 ml-3 max-lg:mt-10">
                <ul className=" after:absolute relative after:bg-[#9800B0] after:top-1 after:bottom-1 after:-left-3 after:w-[2px]">
                  <li className="xl:text-white max-sm:text-sm font-hel uppercase text-base sm:leading-[27.2px] mb-1 font-normal">
                    Die wichtigsten
                  </li>
                  <li className="xl:text-white max-sm:text-sm font-hel uppercase text-base sm:leading-[27.2px] mb-1 font-normal">
                    Aspekte einer{" "}
                  </li>
                  <li className="xl:text-white max-sm:text-sm font-hel uppercase text-base sm:leading-[27.2px]  font-normal">
                    Trennung:{" "}
                  </li>
                </ul>
                <ul className=" list-disc ">
                  <li className="xl:text-white max-sm:text-sm text-base font-Poppins font-medium sm:leading-[25.6px] mb-[2px]">
                    Physische Trennung
                  </li>
                  <li className=" xl:text-white max-sm:text-sm text-base font-Poppins font-medium sm:leading-[25.6px]">
                    Mentale Trennung
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
