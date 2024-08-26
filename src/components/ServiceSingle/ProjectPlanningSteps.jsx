/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
export const ProjectPlanningSteps = ({ steps }) => {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen w-full px-7 md:px-10 lg:px-15">
          <div className="w-full max-w-[900px] p-8 md:p-20 bg-white rounded-2xl dark:bg-gray-800">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-2 dark:text-white max-[640px]:text-xl">
              STEPS
            </h5>
            <div className="grid grid-cols-2 gap-7 max-[640px]:grid-cols-1">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col justify-between gap-4 md:w-full">
                  <p className="text-gray-700 mb-4 dark:text-gray-400">
                    <span className="text-[#CDA274] text-lg dark:text-[#CDA274]">{step.title}</span> <br />
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };
  