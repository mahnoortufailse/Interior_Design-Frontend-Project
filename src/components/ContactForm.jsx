import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFormbtn from "./ContactFormbtn";

gsap.registerPlugin(ScrollTrigger);

export const ContactForm = () => {
  useEffect(() => {
    gsap.from(".contact-form", {
      opacity: 0,
      y: 100, // Slides up from 100px below
      duration: 1,
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top bottom", // Animation starts when the top of the element is at the bottom of the viewport
        once: true, // Animation occurs only once
      },
    });
  }, []);

  return (
    <>
      <section className="bg-white dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
          <div className="contact-form mx-auto max-w-screen-md sm:text-center rounded-3xl bg-[#292F36] p-10 border shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-1 text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-white text-white">
              Wanna join the interno?
            </h2>
            <p className="mx-auto mb-4 max-w-2xl font-light text-gray-300 md:mb-12 text-sm sm:text-xl dark:text-gray-400 ">
              It is a long established fact will be distracted.
            </p>

            <ContactFormbtn />
          </div>
        </div>
      </section>
    </>
  );
};
