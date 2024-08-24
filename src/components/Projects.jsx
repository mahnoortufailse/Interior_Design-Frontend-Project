import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  useEffect(() => {
    gsap.from(".testimo-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".testimo-item",
        start: "top 80%", // animation starts when the top of the element is 80% from the top of the viewport
        end: "bottom 20%", // animation ends when the bottom of the element is 20% from the top of the viewport
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center lg:p-13 md:p-10 p-7">
      <div className="w-full min-[1024px]:w-[1000px] p-24 max-[639px]:p-8 dark:bg-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Follow Our Projects
          </h1>
          <p className="text-black dark:text-gray-400">
            It is a long established fact that a reader will be distracted by
            the of readable content of page lookings at its layouts points.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 justify-items-center">
          <div className="testimo-item w-full bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
            <img
              src="./Photo1.png"
              alt=""
              width={390}
              height={410}
              className="rounded-tr-[30px] object-cover "
            />
            <div className="flex justify-between p-5">
              <p className="font-bold dark:text-gray-300">
                Modern Kitchan <br />
                <span className="font-light dark:text-gray-400">
                  Decor / Architecture
                </span>
              </p>
              <Button />
            </div>
          </div>
          <div className="testimo-item w-full bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
            <img
              src="./Photo2.png"
              alt=""
              width={390}
              height={410}
              className="rounded-tl-[30px] object-cover"
            />
            <div className="flex justify-between p-5">
              <p className="font-bold dark:text-gray-300">
                Modern Kitchan <br />
                <span className="font-light dark:text-gray-400">
                  Decor / Architecture
                </span>
              </p>
              <Button />
            </div>
          </div>
          <div className="testimo-item w-full bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
            <img
              src="./Photo3.png"
              alt=""
              width={390}
              height={410}
              className="rounded-br-[30px] object-cover"
            />
            <div className="flex justify-between p-5">
              <p className="font-bold dark:text-gray-300">
                Modern Kitchan <br />
                <span className="font-light dark:text-gray-400">
                  Decor / Architecture
                </span>
              </p>
              <Button />
            </div>
          </div>
          <div className="testimo-item w-full bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
            <img
              src="./Photo4.png"
              alt=""
              width={390}
              height={410}
              className="rounded-bl-[30px] object-cover"
            />
            <div className="flex justify-between p-5">
              <p className="font-bold dark:text-gray-300">
                Modern Kitchan
                <br />
                <span className="font-light dark:text-gray-400">
                  Decor / Architecture
                </span>
              </p>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
