import { useEffect } from 'react';
import { gsap } from 'gsap';
import styled from "styled-components";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const StyledWrapper = styled.div`
  .button {
  position: relative;
  width: 160px;
  height: 50px;
  background-color: #000;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -4px;
  top: -1px;
  margin: auto;
  width: 170px;
  height: 58px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.button:hover::after {
  filter: blur(30px);
}

.button:hover::before {
  transform: rotate(-180deg);
}

.button:active::before {
  scale: 0.7;
}
`;
const AboutCom = () => {
  useEffect(() => {
    // Animate the text and button
    gsap.fromTo(
      '.abouttext',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', scrollTrigger: {
          trigger: '.about-text',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          once: true
        }
      }
    );

    // Animate the image
    gsap.fromTo(
      '.aboutimage',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: {
          trigger: '.about-image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          once: true
        }
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-4xl p-8 gap-12 dark:bg-gray-800">
        
        <div className="flex flex-col justify-between gap-6 md:w-1/2 abouttext">
          <h5 className="text-5xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white max-[640px]:text-2xl">
            We Create The Art Of Stylish Living Stylishly
          </h5>
          <p className="text-gray-700 mb-4 dark:text-gray-400">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <div className="flex items-center gap-2">
            <img src="./Call Icon.png" alt="Call Icon" width={50} height={50} />
            <p className="font-bold dark:text-gray-300">012345678 <br /><span className="font-light dark:text-gray-400">Call Us Anytime</span></p>
          </div>
          <StyledWrapper>
          <button className="button">Get Free Estimate</button>
        </StyledWrapper>
        </div>
        
        <img
          className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full aboutimage  md:rounded-bl-[90px] md:rounded-tr-[90px]"
          src="./Photo5.png"
          alt="Stylish Living"
        />
        
      </div>
    </div>
  );
}

export default AboutCom;
