/* eslint-disable react/prop-types */
import { MdOutlineArrowForwardIos } from "react-icons/md";
const ProjectGallery = ({ data, onProjectClick }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-2 md:px-6 lg:px-12">
      <div className="max-[640px]:w-full max-w-[900px] p-2 md:p-8 bg-white rounded-2xl dark:bg-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gallery Items */}
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                className="h-[380px] w-full rounded-lg object-cover max-[640px]:h-[230px]"
                src={item.src}
                alt={item.alt}
              />
              <div className="flex justify-between p-5">
                <p className="font-bold dark:text-gray-300">
                  {item.title}
                  <br />
                  <span className="font-light dark:text-gray-400">
                    {item.description}
                  </span>
                </p>

                <button
                  onClick={() => onProjectClick(item)}
                  className="px-4 bg-[#F4F0EC] rounded-full"
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
