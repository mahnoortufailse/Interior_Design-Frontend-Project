import PersonData from '../../utility/PersonsData';
import AnimatedCard from './AnimatedCard';

const PeopleProfile = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:p-13 md:p-10 p-7 bg-[#F4F0EC] dark:bg-gray-800 text-center '>
      <div className='w-full px-14 py-9  max-[639px]:p-8 max-[639px]:px-5 bg-[#F4F0EC] dark:bg-gray-800'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold text-black dark:text-white'>What the People Thinks About Us</h1>
        </div>
        <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          {PersonData.map((item, index) => (
            <div key={index} className='mb-7 lg:mb-1 '>
              <AnimatedCard user={item} />  {/* Pass the user prop correctly */}
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default PeopleProfile;
