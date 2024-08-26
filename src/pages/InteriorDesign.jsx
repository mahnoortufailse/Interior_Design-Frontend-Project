import ClientLogo from "../components/ClientLogo"
import HeroAll from "../components/HeroAll"
import InformationTag from "../components/informationTag"
import DescriptionServices from "../components/ServiceSingle/DescriptionServices"
import InteriorLastCom from "../components/ServiceSingle/InteriorLastCom"
import { ProjectPlanningSteps } from "../components/ServiceSingle/ProjectPlanningSteps"
import VideoComponent from "../components/ServiceSingle/VideoComponent"
import { interiorDesignSteps } from "../utility/ServicesData"
import { service2 } from "../utility/ServicesData"
const InteriorDesign = () => {
    const data = {
        text: "Interior work",
        image: "/interiorDesignBG.jpg"
      };
    
      return (
        <>
          <HeroAll data={data}/> 
          <DescriptionServices  service={service2} />
          <VideoComponent/>
          <ClientLogo/>
          <ProjectPlanningSteps steps={interiorDesignSteps}/>
          <InteriorLastCom/>
          <InformationTag/>
        </>
      )
}

export default InteriorDesign