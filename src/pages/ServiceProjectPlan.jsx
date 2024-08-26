import ClientLogo from "../components/ClientLogo"
import HeroAll from "../components/HeroAll"
import InformationTag from "../components/informationTag"
import DescriptionServices from "../components/ServiceSingle/DescriptionServices"
import GalleryPart from "../components/ServiceSingle/GalleryPart"
import { ProjectPlanningSteps } from "../components/ServiceSingle/ProjectPlanningSteps"
import { projectPlaningSteps, service1, projectPlanImage } from "../utility/ServicesData"

const ServiceProjectPlan = () => {
  const data = {
    text: "Project Plan",
    image: "/PlaningBG.jpg"
  };

  return (
    <>
      <HeroAll data={data}/> 
      <DescriptionServices service={service1}/>
      <ClientLogo/>
      <GalleryPart images={projectPlanImage}/>
      <ProjectPlanningSteps steps={projectPlaningSteps}/>
      <InformationTag/>
    </>
  )
}

export default ServiceProjectPlan;
