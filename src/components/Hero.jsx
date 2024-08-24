import { useEffect } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
const Hero = () => {
  const StyledWrapper = styled.div`
    button {
      position: relative;
      display: inline-block;
      cursor: pointer;
      outline: none;
      border: 0;
      vertical-align: middle;
      text-decoration: none;
      background: transparent;
      padding: 0;
      font-size: inherit;
      font-family: inherit;
    }

    button.learn-more {
      width: 12rem;
      height: auto;

    @media (max-width: 640px) {
        width: 8.7rem;
        height: 2.5rem;
      }
    }

    button.learn-more .circle {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: relative;
      display: block;
      margin: 0;
      width: 3rem;
      height: 3rem;
      background: #282936;
      border-radius: 1.625rem;
      @media (max-width: 640px) {
        width: 2.2rem;
        height: 2rem;
      }
    }

    button.learn-more .circle .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: #fff;
    }

    button.learn-more .circle .icon.arrow {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      left: 0.625rem;
      width: 1.125rem;
      height: 0.125rem;
      background: none;
    }
    
    button .icon arrow{
       @media (max-width: 640px) {
        width: 0.1rem;
        height: 1.5rem;
      }
    }
    button.learn-more .circle .icon.arrow::before {
      position: absolute;
      content: "";
      top: -0.29rem;
      right: 0.0625rem;
      width: 0.625rem;
      height: 0.625rem;
      border-top: 0.125rem solid #fff;
      border-right: 0.125rem solid #fff;
      transform: rotate(45deg);
    }

    button .button-text{
       @media (max-width: 640px) {
        padding-left:8px;
      }
    }

    button.learn-more .button-text {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0.75rem 0;
      margin: 0 0 0 1.85rem;
      color: #282936;
      font-weight: 700;
      line-height: 1.6;
      text-align: center;
      text-transform: uppercase;
      @media (max-width: 640px) {
        font-size: 0.8rem;
      }
    }

    button:hover .circle {
      width: 100%;
    }

    button:hover .circle .icon.arrow {
      background: #fff;
      transform: translate(0.8rem, 0);
    }

    button:hover .button-text {
      color: #fff;
    }
  `;

  useEffect(() => {
    gsap.fromTo(".hero-image", { opacity: 0 }, { opacity: 1, duration: 1.5 });

    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 0.5 }
    );

    gsap.fromTo(
      ".hero-button",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, delay: 1 }
    );
  }, []);

  return (
    <div className="relative w-full">
      <img
        src="/image1.png"
        alt="bag"
        className="hero-image w-full h-auto object-cover max-[640px]:h-[340px]"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-left lg:px-48 lg:py-5 sm:px-4 py-7 sm:py-6 max-[639px]:py-5 md:px-8 max-[639px]:px-5 dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-black/70">
        <div className="relative z-10 max-w-screen-xl w-full hero-text">
          <h1 className="text-[#292F36] font-semibold lg:text-7xl sm:text-3xl md:text-5xl sm:mb-5 max-[639px]:mb-1 md:mb-8 max-[639px]:text-lg lg:mb-10">
            Let Your Home <br />
            Be Unique
          </h1>
          <p className="text-[#292F36] text-xs md:text-sm lg:text-base xl:text-lg sm:mb-6 max-[639px]:mb-1 md:mb-8 lg:mb-10">
            There are many variations of the passages of lorem Ipsum from
            available, <br />
            variations of the passages.
          </p>
          <StyledWrapper>
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Get Started</span>
            </button>
          </StyledWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
