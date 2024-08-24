import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import testimonialData from '../utility/Testimonial';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useEffect(() => {
    gsap.fromTo(
      '.testimonialitem',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.testimonialitem',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          once: true
        }
      }
    );
  }, []);

  return (
    <div className='flex flex-col justify-center items-center lg:p-13 md:p-10 p-7'>
      <div className='w-full min-[1024px]:w-[900px] p-20 max-[639px]:p-8 bg-[#F4F0EC] rounded-2xl dark:bg-gray-800'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold text-black dark:text-white max-[640px]:text-1xl'>What the People Thinks About Us</h1>
        </div>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 justify-items-center'>
          {testimonialData.map((item, index) => (
            <div
              key={index}
              className="testimonialitem w-full p-4 bg-white rounded-2xl border shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex items-center gap-2">
                <img src={item.img} alt="" width={50} height={50} />
                <p className="font-bold dark:text-gray-300">{item.name} <br /><span className="font-light dark:text-gray-400">{item.location}</span></p>
              </div>
              <p className="my-5 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
