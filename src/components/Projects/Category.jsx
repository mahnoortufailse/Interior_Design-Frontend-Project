import { useState } from "react";
import { useNavigate  } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("bedroom");

  const handleClick = (category, page = 1) => {
    setActiveButton(category);
    navigate(`${category}/page/${page}`);
  };
  

  return (
    <div className="flex items-center justify-center h-[70px] w-full px-1 md:px-3 py-1 pt-20 max-[640px]:h-[80px]  ">
      <div className="w-full max-w-[700px] p-4 md:p-8 bg-white rounded-sm dark:bg-gray-800 text-center max-[640px]:w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 border-2  rounded-lg max-[640px]:text-xs max-[640px]:gap-0">
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
