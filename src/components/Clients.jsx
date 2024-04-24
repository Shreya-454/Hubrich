"use client"
import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"; 
import { Navigation, Pagination,Virtual,A11y,Autoplay,Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BlueQuttes } from './Icon';
const carddata1 =[
    {
       dis:"Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.",
        name:"Marrie James-CEO",
       post:"Limana Enterprises, CA",
       img:"/assets/images/slider1.webp"
    },
    {
       dis:"Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
        name:"Ralph Edwards-CEO",
       post:"Limana Enterprises, CA",
       img:"/assets/images/slider1.webp"
    },
    {
       dis:"Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
        name:"Darrell Steward-Head",
       post:"Limana Enterprises, CA",
       img:"/assets/images/slider1.webp"
    }
]
const carddata2 =[
    {
       dis:"Nec pellentesque aliquet diam eget sed mi ornare vulputate duis. Posuere id habitasse quis ac ac. Pellentesque eget sed ut tincidunt cras. Ipsum nec placerat vitae orci. Accumsan amet commodo montes, aenean velit gravida tristique montes. Porttitor velit cras venenatis, amet curabitur ultricies ac dictum.",
        name:"Marrie James-CEO",
       post:"Limana Enterprises, CA", 
    },
    {
       dis:"Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
        name:"Ralph Edwards-CEO",
       post:"Limana Enterprises, CA",
    },
    {
       dis:"Elementum risus cursus vehicula consectetur sapien ut tempor, venenatis turpis. Sed mauris enim.",
        name:"Darrell Steward-Head",
       post:"Limana Enterprises, CA",
    }
]
const Clients = () => {
    const [firstSwiper, setFirstSwiper] = React.useState(null);
  const [secondSwiper, setSecondSwiper] = React.useState(null);
  // const swiperRef = React.useRef();
  return (
    <div className=' pb-[226.98px] pt-[202px] relative overflow-x-clip max-md:py-20 max-sm:py-10'>
      <div className=' container max-w-[1140px] mx-auto'>
        <h2 data-aos="fade-down" className=' uppercase font-hel text-center text-[52px] max-sm:text-4xl sm:leading-[66.98px] font-normal text-black mb-7'>What our <span className='text-[#F77B0B]'>clients</span> say</h2>
              <Swiper
                  direction={"vertical"}
                  modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
                  loop={true}
                  autoHeight={true}
                  spaceBetween={200}
                  slidesPerView={1}
                  pagination={true}
                  navigation={false}
                  onSwiper={setFirstSwiper}
                  controller={{ control: secondSwiper }}
                  className=" md:!px-40 relative z-[1] !pt-[84px] !pb-[20px] !mb-5"
                  data-aos="zoom-in"
                >
                  {carddata1.map((data, index) => (
                    <SwiperSlide key={index} className=" !h-auto">
                      <div className=" p-[58px_50px_32px] relative z-[1] shadow-[0px_2px_48px_0px_#00000014] !min-h-[270px] ">
                        <p className=" text-gray-white-100 font-poppines max-w-[721px] mx-auto max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.dis}
                        </p>
                        <h3 className=" font-poppines pt-4 font-medium max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.name}
                        </h3>
                        <p className="text-gray-white-100 font-normal font-poppines max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.post}
                        </p>
                        <img
                          src={data.img}
                          alt="girl"
                          width={86}
                          height={86}
                          className=" absolute left-[50%] translate-x-[-50%] top-0 z-[-1] translate-y-[-55px]"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <span className=" absolute top-[9%]  sm:top-[14%] right-[4%] z-[-1]">
                    <BlueQuttes />
                  </span>
                </Swiper>
                {/*  */}
                <Swiper 
                  breakpoints={{
                    850: {
                      slidesPerView: 2,
                    },
                  }}
                  modules={[Virtual, A11y, Autoplay, Controller, Pagination]}
                  loop={true}
                  spaceBetween={20}
                  slidesPerView={1}
                  onSwiper={setSecondSwiper}
                  controller={{ control: firstSwiper }}
                  className="max-w-[820px] px-5 pb-10"
                  data-aos="zoom-in"
                >
                  {carddata2.map((data, index) => (
                    <SwiperSlide key={index} className=" !h-auto">
                      <div className=" p-[25px_36px_31px] mt-5 relative z-[1]  shadow-[0px_2px_48px_0px_#00000014] h-full ">
                        <p className=" text-gray-white-100 font-poppines max-w-[721px] mx-auto max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.dis}
                        </p>
                        <h3 className=" font-poppines pt-4 font-medium max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.name}
                        </h3>
                        <p className="text-gray-white-100 font-normal font-poppines max-sm:text-sm text-base sm:leading-[25.6px] text-center">
                          {data.post}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className=' absolute bottom-[2%] max-sm:hidden' data-aos="fade-right">
                  <div className="flex justify-start mb-[11px]">
                    <p className=' font-Poppins text-xl leading-[34px] text-black font-light tracking-[0.04em] -rotate-90'>MJH</p>
                  </div>
                  <div className="flex items-end translate-x-5">
                    <div className=' w-[26px] h-[269px] border-l border-b border-solid border-[#F77B0B]'></div>
                    <div className='flex items-end translate-y-3'>
                      <p className=' text-[40px] font-hel leading-[51.52px] font-normal -rotate-90'>07</p>
                      <p className=' uppercase font-hel text-2xl leading-[30.91px] font-normal'>take step</p>
                    </div>
                  </div>
                </div>
          </div>
      </div>
  )
}

export default Clients
