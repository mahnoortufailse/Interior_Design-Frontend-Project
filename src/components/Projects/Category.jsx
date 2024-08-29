import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("bedroom");

  const handleClick = (category, page = 1) => {
    setActiveButton(category);
    console.log(category)
    navigate(`${category}/page/${page}`);
  };
  

  return (
    <div className="flex items-center justify-center h-[100px] w-full px-3 md:px-3 lg:py-16 pt-20">
      <div className="w-full max-w-[700px] p-4 md:p-8 bg-white rounded-sm dark:bg-gray-800 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-2  rounded-lg">
          <button
            onClick={() => handleClick("bedroom")}
            className={`${
              activeButton === "bedroom" ? "bg-[#CDA274] rounded-lg border-yellow-800" : "bg-white dark:bg-gray-800 text-black dark:text-gray-500"
            } p-2 rounded-lg `}
          >
            Bedroom
          </button>
          <button
            onClick={() => handleClick("bath-room")}
            className={`${
              activeButton === "bath-room" ? "bg-[#CDA274] rounded-lg border-yellow-800" : "bg-white dark:bg-gray-800 text-black dark:text-gray-500"
            } p-2 rounded-lg`}
          >
            Bathroom
          </button>
          <button
            onClick={() => handleClick("kitchen")}
            className={`${
              activeButton === "kitchen" ? "bg-[#CDA274] rounded-lg border-yellow-800" : "bg-white dark:bg-gray-800 text-black dark:text-gray-500"
            } p-2 rounded-lg`}
          >
            Kitchen
          </button>
          <button
            onClick={() => handleClick("living-room")}
            className={`${
              activeButton === "living-room" ? "bg-[#CDA274] rounded-lg border-yellow-800" : "bg-white dark:bg-gray-800 text-black dark:text-gray-500"
            } p-2 rounded-lg`}
          >
            Living Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
