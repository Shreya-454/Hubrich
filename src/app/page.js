"use client"
import Binding from "@/components/Binding";
import Clients from "@/components/Clients";
import Fault from "@/components/Fault";
import Get from "@/components/Get";
import Header from "@/components/Header";
import Lawyer from "@/components/Lawyer";
import Mindset from "@/components/Mindset";
import Over from "@/components/Over";
import Preloader from "@/components/Preloader";
import Target from "@/components/Target";
import Footer from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader />
      </div>
    ) : (
  <div className=" overflow-x-clip">
  <Header/>
  <Fault/>
  <Get/>
  <Target/>
  <Mindset/>
  <Over/>
  <Lawyer/>
  <Clients/>
  <Binding/>
  <Footer/>
  </div>
)}
</div>
  );
}
