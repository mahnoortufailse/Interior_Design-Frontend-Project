import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import items from '../utility/work';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  
 
 useEffect(() => {
    // Define the animation
    gsap.fromTo(
      '.workitem',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.workitem',
          start: 'top bottom', // When the top of the item is at the bottom of the viewport
          end: 'bottom top', // When the bottom of the item is at the top of the viewport
          scrub: true, // Optional: smooth animation tied to scroll position
          once: true // Optional: animation happens only once per item
        }
      }
    );
  }, []);

  return (
    <div className='flex justify-center items-center lg:p-15 md:p-10 p-7'>
      <div className='w-full min-[1024px]:w-[900px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-items-center place-content-center'>
        {items.map((item, index) => (
            
          <div
            key={index}
            className="workitem w-full p-3 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{item.name}</h5>
            <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            <p className='font-bold'>Get More</p>
          </div>
      
        ))}
      </div>
    </div>
  );
}

export default Work;
