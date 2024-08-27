import ClientLogo from "../components/ClientLogo";
import HeroAll from "../components/HeroAll";
import InformationTag from "../components/informationTag";
import DescriptionServices from "../components/ServiceSingle/DescriptionServices";
import GalleryPart from "../components/ServiceSingle/GalleryPart";
import { ProjectPlanningSteps } from "../components/ServiceSingle/ProjectPlanningSteps";

import {
  artwork2D3DCreationSteps,
  service4,
  ArtWorkImage,
} from "../utility/ServicesData";
const ArtWork = () => {
  const data = {
    text: "2D/3D Art Work",
    image: "/artworkBG.jpg",
  };

  return (
    <>
      <HeroAll data={data} />
      <DescriptionServices service={service4} />
      <ClientLogo />
      <GalleryPart images={ArtWorkImage} />
      <ProjectPlanningSteps steps={artwork2D3DCreationSteps} />
      <InformationTag />
    </>
  );
};

export default ArtWork;
