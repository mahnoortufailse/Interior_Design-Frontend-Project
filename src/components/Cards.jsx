import { CardsData } from "../utility/CardsData";
import Button from "../components/Button";
const Cards = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center lg:p-20 md:p-15 p-7">
        {/* Text at the top and centered */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-black dark:text-white max-[640px]:text-2xl">
            Follow Our Projects
          </h1>
          <p className="text-black dark:text-gray-400 mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page looking at its layout and points.
          </p>
        </div>

        {/* Cards below the text */}
        <div className="w-full grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center place-content-center">
          {CardsData.map((item, index) => (
            <div
              key={index}
              className="work-item w-full max-w-xs p-3 bg-white border border-gray-200 rounded-3xl shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 transition transform hover:bg-[#cfc8c8] dark:hover:bg-gray-600 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.designName}
                width={310}
                height={300}
                className="rounded-t-3xl mx-auto"
              />
              <h5 className="mt-4 mb-2 text-lg font-bold text-gray-900 dark:text-white ">
                {item.designName}
              </h5>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="font-bold text-gray-600 dark:text-gray-300">
                  {item.date}
                </p>
                <Button/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
