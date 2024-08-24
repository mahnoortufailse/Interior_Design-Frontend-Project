import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ServicesStepData } from "../../utility/ServicesData";

gsap.registerPlugin(ScrollTrigger);

const WeWork = () => {
  useEffect(() => {
    gsap.fromTo(
      ".service-item",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".service-item",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center lg:p-13 md:p-10 p-3">
      <div className="w-full min-[1024px]:w-[900px] p-20 max-[639px]:p-4 bg-[#F4F0EC] rounded-2xl dark:bg-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black dark:text-white max-[640px]:text-1xl">
            What the People Thinks About Us
          </h1>
        </div>
        {ServicesStepData.map((item, index) => {
          const flexDirection = index % 2 === 0 ? "flex-row" : "flex-row-reverse";
          const smallScreenDirection = index % 2 === 0 ? "max-[640px]:flex-col" : "max-[640px]:flex-col-reverse";

          return (
            <div
              key={index}
              className={`flex gap-5 justify-items-center p-6 mb-6 max-[640px]:p-2 max-[640px]:gap-3 ${flexDirection} ${smallScreenDirection} service-item`}
            >
              <img
                className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full md:rounded-bl-[90px]"
                src={item.image}
                alt="Stylish Living"
              />
              <div className="flex flex-col justify-between gap-6 p-3 md:w-1/2">
                <div className="flex items-center justify-between gap-2 px-2">
                  <img src={item.logo} alt="Call Icon" width={50} height={70} />
                  <p className="font-medium text-8xl text-[#fffffe] max-[745px]:text-3xl font-serif">{`0${item.id}`}</p>
                </div>
                <div>
                  <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white max-[640px]:text-xl">
                    {item.name}
                  </h5>
                  <p className="text-gray-700 mb-2 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeWork;
