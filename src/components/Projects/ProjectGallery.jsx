/* eslint-disable react/prop-types */
import Button from "../Button";

const ProjectGallery = ({data}) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-[900px] p-4 md:p-8 bg-white rounded-2xl dark:bg-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {/* Gallery Items */}
          {data.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                className="h-[380px] w-full rounded-lg object-cover"
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
                <Button />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default ProjectGallery;
