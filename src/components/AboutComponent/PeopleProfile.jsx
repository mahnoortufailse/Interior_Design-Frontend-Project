/* eslint-disable react/prop-types */
import TeamProfileCard from '../TeamPageComponent/TeamProfileCard';
import AnimatedCard from '../AboutComponent/AnimatedCard';
import { useNavigate } from 'react-router-dom';
// import AnimatedCard from './AnimatedCard';

const PeopleProfile = ({ data, renderAnimatedCard , heading}) => {
  const navigate = useNavigate();
  
  const handleCardClick = (user) => {
    const formattedName = user.name.replace(/\s+/g, '-'); // Replace spaces with hyphens
    navigate(`/team/${formattedName}`, { state: { user } });
  };
  return (
    <div className='flex flex-col justify-center items-center lg:p-13 md:p-10 p-7 bg-[#F4F0EC] dark:bg-gray-800 text-center '>
      <div className='w-full px-14 py-9  max-[639px]:p-8 max-[639px]:px-5 bg-[#F4F0EC] dark:bg-gray-800'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl font-bold text-black dark:text-white'>{heading}</h1>
        </div>
        <div className='grid max-[545px]:grid-cols-1 grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
          {data.map((item, index) => (
            <div key={index} className='mb-10 lg:mb-1 cursor-pointer' onClick={() => handleCardClick(item)}>
              {renderAnimatedCard ? (
                <AnimatedCard user={item} />
              ) : (
                <TeamProfileCard user={item} />
              )}
            </div>
          ))}
        </div> 
      </div>
    </div>
  );
}

export default PeopleProfile;
