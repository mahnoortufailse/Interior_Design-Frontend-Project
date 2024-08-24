const GalleryPart = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen w-full px-7 md:px-10 lg:px-15">
        <div className="w-full max-w-[900px] p-8 md:p-20 bg-white rounded-2xl dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <div>
              <img
                className="h-[280px] max-w-full"
                src="/poro11.jpg"
                alt="Gallery Image 1"
              />
            </div>
            <div>
              <img
                className="h-[280px] max-w-full"
                src="/poro2.jpg"
                alt="Gallery Image 2"
              />
            </div>
            <div>
              <img
                className="h-[280px] max-w-full"
                src="/projectplan1.jpg"
                alt="Gallery Image 3"
              />
            </div>
            <div>
              <img
                className="h-[280px] max-w-full"
                src="/plan3.jpg"
                alt="Gallery Image 4"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryPart;
