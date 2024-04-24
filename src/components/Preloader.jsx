import React from "react";
import Image from 'next/image'
const Preloader = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center ">
      
    <div className="relative flex justify-center items-center flex-col">
    <div className="absolute animate-spin-slow rounded-full h-72 w-72 border-t-8 border-b-8 border-[#003E92]"></div>
    <Image src="/assets/images/svg/Logo.svg" alt="logo" width={221.86} height={38.43}  className=" animate-pulse"/>
</div>
      </div>
  );
};

export default Preloader;
