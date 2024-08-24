import { service1 } from '../../utility/ServicesData';

const DescriptionServices = () => {
  return (
    <> 
      <div className="flex items-center justify-center min-h-screen px-2 ">
        <div className="flex flex-col md:flex-row justify-center bg-white max-w-4xl p-8 gap-6 dark:bg-gray-800 rounded-lg">
          <div>
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">
              {service1.title}
            </h5>
          </div>
          <div className="flex flex-col justify-between gap-6 md:w-1/2 about-text">
            <p className="text-[#CDA274] mb-4 dark:text-[#CDA274]">
              {service1.description1}
            </p>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
              {service1.description2}
            </p>
          </div>   
        </div>    
      </div>
    </>
  );
}

export default DescriptionServices;
