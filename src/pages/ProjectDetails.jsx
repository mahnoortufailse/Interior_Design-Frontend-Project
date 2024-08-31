import { useLocation } from "react-router-dom";
import HeroAll from "../components/HeroAll";

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state;
  console.log("Received project data:", project);
  if (!project) {
    return <div>No project data available.</div>;
  }

  return (
    <>
    <HeroAll data={{ text: "Project Details", image: "/ProjectDetailBG.png" }}/>
    <div className="flex items-center justify-center min-h-screen w-full px-4 md:px-8 lg:px-12">
      <div className="w-full max-w-[900px] p-4 md:p-8 bg-white rounded-2xl dark:bg-gray-800">
        <div className="flex flex-col md:flex-row justify-between bg-white max-w-4xl p-8 gap-10 dark:bg-gray-800 rounded-lg">
          <div className="flex flex-col justify-between p-8 bg-[#F4F0EC] rounded-3xl dark:bg-gray-800 dark:text-gray-400 space-y-4 h-[300px]">
            <p>
              <span className="font-semibold">Client:</span>{" "}
              {project.clientName}
            </p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {project.category}
            </p>
            <p>
              <span className="font-semibold">Tags:</span> {project.tag}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {project.date}
            </p>
            <p>
              <span className="font-semibold">Link:</span>{" "}
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </a>
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6 md:w-1/2 about-text">
            <h5 className="text-3xl font-bold tracking-tight text-gray-900 mb-4 dark:text-white">
              {project.title}
            </h5>
            <p className="text-[#CDA274] mb-4 dark:text-[#CDA274]">
              {project.description1}
            </p>
            <p className="text-gray-700 mb-4 dark:text-gray-400">
              {project.description2}
            </p>
          </div>
        </div>
        <img
          className="h-[380px] w-full rounded-xl object-cover"
          src={project.src}
          alt={project.alt}
        />
      </div>
    </div>
    </>
  );
};

export default ProjectDetails;
