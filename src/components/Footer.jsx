import React from "react";
import Image from "next/image";
import { Facebook, Insta, Mail, Twitter } from "./Icon";
function Footer() {
  return (
    <div className="bg-[url(/assets/images/footerbg.webp)] bg-cover bg-center bg-no-repeat pt-[90.25px] pb-[93px] max-md:py-16 max-sm:py-10 overflow-x-clip ">
      <div className="container max-w-[1140px] mx-auto px-3 2xl:max-w-[1320px] relative">
        <div className=" w-full flex  flex-col items-center ">
          <Image
            src="/assets/images/svg/footlogo.svg"
            alt="logo"
            width={241}
            height={90}
            className="mb-4 lg:pr-7"
          />
          <p className=" text-white text-center text-base max-sm:text-sm font-Poppins sm:leading-[25.6px] font-normal max-w-[264px]">
            (c)2022 MARC JOACHIM HUBRICH{" "}
            <span className="block">All Rights Reserved</span>
          </p>
        </div>
        <div className=" w-full flex justify-center lg:justify-end max-lg:mt-7">
          <div className=" max-lg:flex gap-3 lg:absolute top-0 right-0 pr-4">
            <div className="lg:mb-3 " >
              <a href="https://www.facebook.com/" target="_blank" >
                <Facebook />
              </a>
            </div>
            <div className="lg:mb-3">
              <a href="" target="_blank">
                <Twitter />
              </a>
            </div>
            <div className="lg:mb-3">
              <a href="mailto:hubrich123@.com" target="_blank">
                <Mail />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/" target="_blank">
                <Insta />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
