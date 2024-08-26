/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroAll = ({ data }) => {
  useEffect(() => {
    // Image animation
    gsap.from(".hero-image", {
      scale: 1.2,
      duration: 1.5,
      ease: "power2.out",
    });

    // Text animation with ScrollTrigger
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="relative w-full">
      <img
        src={data.image}
        alt="bag"
        className="hero-image w-full h-[60vh] object-cover max-[640px]:h-[340px] rounded-lg shadow-lg"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 lg:px-48 lg:py-5 sm:px-4 py-7 sm:py-6 max-[639px]:py-5 md:px-8 max-[639px]:px-5 dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-black/70">
        <div className="relative z-10 max-w-screen-xl w-[340px] hero-text bg-white max-[640px]:w-[190px] dark:bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-md">
          <h1 className="text-[#292F36] font-semibold lg:text-6xl sm:text-4xl md:text-5xl max-[639px]:text-3xl dark:text-slate-200 leading-tight">
            {data.text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroAll;
