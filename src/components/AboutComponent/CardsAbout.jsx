import Button2 from "./Button2";

const CardsAbout = () => {
  
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center min-h-screen px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-4xl p-8 gap-12 dark:bg-gray-800">
          <div className="flex flex-col justify-between gap-6 md:w-1/2 about-text">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">
              What We Do
            </h5>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
              <Button2 name={"Our Concepts"}/>
              
           
          </div>

          <img
            className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full about-image  md:rounded-3xl"
            src="./p1.png"
            alt="Stylish Living"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between bg-white max-w-4xl p-8 gap-12 dark:bg-gray-800 max-[640px]:flex-col-reverse">
        <img
            className="object-cover mt-6 md:mt-0 md:w-1/2 rounded-none w-full about-image  md:rounded-3xl"
            src="./p2.jpg"
            alt="Stylish Living"
          />
          <div className="flex flex-col justify-between gap-6 md:w-1/2 about-text">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">
            The End Result
            </h5>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
              It is a long established fact that a reader will be distracted by
              the of readable content of a page when lookings at its layouts the
              points of using that it has a more-or-less normal.
            </p>
            <Button2 name={"Our Portfolio"}/>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default CardsAbout;
