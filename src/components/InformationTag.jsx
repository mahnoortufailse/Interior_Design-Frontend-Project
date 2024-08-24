const InformationTag = () => {
    return (
      <div className='w-full h-full bg-[#F4F0EC] dark:bg-gray-800'>
        <div className='flex justify-center items-center lg:m-10 md:m-5 m-3'>
          <div className='w-full min-[1024px]:w-[900px] grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-4 justify-items-center place-content-center text-center py-6'>
            <div className="logo-item w-auto p-3 text-center bg-[#F4F0EC] sm:p-6 dark:bg-gray-800 border-r-2 border-[#dfbd9c] h-[110px]">
              <h1 className="font-medium text-5xl text-[#CDA274] max-[745px]:text-3xl">12</h1> <br />
              <p className="font-light text-sm text-[#4D5053] dark:text-gray-400 max-[745px]:text-xs">Years Of Experience</p>
            </div>
            <div className="logo-item w-auto p-3 text-center bg-[#F4F0EC] sm:p-6 dark:bg-gray-800 border-r-2 border-[#dfbd9c] h-[110px] ">
              <h1 className="font-medium text-5xl text-[#CDA274] max-[745px]:text-3xl">87</h1> <br />
              <p className="font-light text-sm text-[#4D5053] dark:text-gray-400 max-[745px]:text-xs">Success Projects</p>
            </div>
            <div className="logo-item w-auto p-3 text-center bg-[#F4F0EC] sm:p-6 dark:bg-gray-800 border-r-2 border-[#dfbd9c] h-[110px] ">
              <h1 className="font-medium text-5xl text-[#CDA274] max-[745px]:text-3xl">15</h1> <br />
              <p className="font-light text-sm text-[#4D5053] dark:text-gray-400 max-[745px]:text-xs">Active Projects</p>
            </div>
            <div className="logo-item w-auto p-3 text-center bg-[#F4F0EC] sm:p-6 dark:bg-gray-800 border-r-2 border-[#dfbd9c] h-[110px] max-[745px]:h-[60px] max-[745px]:p-1">
              <h1 className="font-medium text-5xl text-[#CDA274] max-[745px]:text-3xl">95</h1> <br />
              <p className="font-light text-sm text-[#4D5053] dark:text-gray-400 max-[745px]:text-xs">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default InformationTag;
  