import ClientLogo from "../components/ClientLogo"
import HeroAll from "../components/HeroAll"
import InformationTag from "../components/informationTag"
import DescriptionServices from "../components/ServiceSingle/DescriptionServices"
import GalleryPart from "../components/ServiceSingle/GalleryPart"
import { ProjectPlanningSteps } from "../components/ServiceSingle/ProjectPlanningSteps"
import { retailDesignSteps, service3, RetailImages } from "../utility/ServicesData"

const RetailDesign = () => {
    const data = {
        text: "Retail Design",
        image: "/RetailBG.webp"
      };
    
      return (
        <>
          <HeroAll data={data}/> 
          <DescriptionServices service={service3}/>
          <ClientLogo/>
          <GalleryPart images={RetailImages}/>
          <ProjectPlanningSteps steps={retailDesignSteps}/>
          <InformationTag/>
        </>
      )
}

export default RetailDesign