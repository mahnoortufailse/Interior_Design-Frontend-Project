import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { items } from "../../utility/ServicesData";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ServicesCards = () => {
  useEffect(() => {
    gsap.fromTo(
      ".workitem",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".workitem",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center lg:p-15 md:p-10 p-7">
      <div className="w-full min-[1024px]:w-[900px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-items-center place-content-center">
        {items.map((item, index) => (
          <div
            key={index}
            className="workitem w-full p-3 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-slate-600 hover:bg-gray-200"
          >
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
              {item.name}
            </h5>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
              {item.description}
            </p>
            <Link to={item.link}><p className="font-bold">Get More</p></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
