import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ClientLogo = () => {
  useEffect(() => {
    gsap.fromTo(
      '.logo-item',
      {
        opacity: 0,
        y: 50,
        rotation: -15,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'bounce.out',
        scrollTrigger: {
          trigger: '.logo-item',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          once: true
        }
      }
    );
  }, []);

  return (
    <div className='flex justify-center items-center lg:p-15 md:p-10 p-7'>
      <div className='w-full min-[1024px]:w-[900px] grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 justify-items-center place-content-center text-center'>
        <div className="logo-item w-auto p-2 text-center bg-white sm:p-3 dark:bg-gray-800">
          <img src="/ic1.svg" alt="Client Logo 1" className="w-20 h-20 dark:filter dark:invert" />
        </div>
        <div className="logo-item w-auto p-3 text-center bg-white sm:p-6 dark:bg-gray-800">
          <img src="/ic2.svg" alt="Client Logo 2" className="w-20 h-20 dark:filter dark:invert" />
        </div>
        <div className="logo-item w-auto p-3 text-center bg-white sm:p-6 dark:bg-gray-800">
          <img src="/ic3.svg" alt="Client Logo 3" className="w-20 h-20 dark:filter dark:invert" />
        </div>
        <div className="logo-item w-auto p-3 text-center bg-white sm:p-6 dark:bg-gray-800">
          <img src="/ic4.svg" alt="Client Logo 4" className="w-20 h-20 dark:filter dark:invert" />
        </div>
        <div className="logo-item w-auto p-3 text-center bg-white sm:p-6 dark:bg-gray-800">
          <img src="/ic5.svg" alt="Client Logo 5" className="w-20 h-20 dark:filter dark:invert" />
        </div>
      </div>
    </div>
  );
}

export default ClientLogo;
