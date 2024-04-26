"use client"
import React, { useState } from 'react'
import Image from 'next/image'
const Nav = () => {
    const [show, setshow] = useState(true);
    function nav() {
      setshow(!show); 
  
    if(show === true){
document.body.classList.add("max-lg:overflow-hidden");
    }
  else{
    document.body.classList.remove("max-lg:overflow-hidden");
  }}
  return (
    <div>
    <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto">
        <div className='flex items-center  py-[19px]  justify-between'>
          <a href="#home">
        <Image src="/assets/images/svg/Logo.svg" alt='logo' width={145.37} height={53}/>
          </a>
            <ul className={`flex gap-10 mobileView items-center ${ show ? "right-[-100%]" : "right-0"
        }`}>
                <li onClick={nav}><a href="#get"  className=' font-hel  leading-[20.61px]  font-normal text-base text-white hover:text-black duration-300 after:bg-black after:right-0 after:left-[100%] after:duration-300 after:rounded-md after:h-[2px] after:absolute hover:after:left-0 relative after:bottom-0'>Benifits</a></li>
                <li onClick={nav}><a href="#test"  className=' font-hel leading-[20.61px] font-normal text-base text-white hover:text-black duration-300 after:bg-black after:right-0 after:left-[100%] after:duration-300 after:rounded-md after:h-[2px] after:absolute hover:after:left-0 relative after:bottom-0'>Testimonials</a></li>
                <li><button className=' bg-btn-gradient  font-medium text-base font-Inter py-4 px-[28.21px] after:absolute relative after:h-full after:top-0 after:left-0 hover:after:right-0 group after:right-[100%] after:bg-white after:z-[-1] z-[1] after:duration-300'><span className='text-white duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-btn-gradient'>Book consultation now</span></button></li>
            </ul>
         
            
             <label className=" lg:hidden" onClick={nav}>
      {show ? (
        <div className="z-30 relative">
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6"></span>
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
          <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
        </div>
      ) : (
        <div className="z-30 relative">
          <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
          <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
        </div>
      )}
    </label>
        </div>
</div>
</div>
  )
}

export default Nav
