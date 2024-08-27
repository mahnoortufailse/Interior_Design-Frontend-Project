import ClientLogo from "../components/ClientLogo";
import HeroAll from "../components/HeroAll";
import InformationTag from "../components/informationTag";
import DescriptionServices from "../components/ServiceSingle/DescriptionServices";
import GalleryPart from "../components/ServiceSingle/GalleryPart";
import { ProjectPlanningSteps } from "../components/ServiceSingle/ProjectPlanningSteps";

import {
  decorationSteps,
  service5,
  DecorationImage,
} from "../utility/ServicesData";
const Decoration = () => {
    const data = {
        text: "Decoration Work",
        image: "/decoBG.jpg",
      };
    
      return (
        <>
          <HeroAll data={data} />
          <DescriptionServices service={service5} />
          <ClientLogo />
          <GalleryPart images={DecorationImage} />
          <ProjectPlanningSteps steps={decorationSteps} />
          <InformationTag />
        </>
      );
}

export default Decoration