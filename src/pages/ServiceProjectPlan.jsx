import ClientLogo from "../components/ClientLogo"
import HeroAll from "../components/HeroAll"
import InformationTag from "../components/informationTag"
import DescriptionServices from "../components/ServiceSingle/DescriptionServices"
import GalleryPart from "../components/ServiceSingle/GalleryPart"
const ServiceProjectPlan = () => {
  const data2 = {
    text: "Project Plan",
    image: "/BG.png"
  };
  return (
     <>
      <HeroAll data={data2}/> 
      <DescriptionServices/>
      <ClientLogo/>
      <GalleryPart/>
      <InformationTag/>
    </>
  )
}

export default ServiceProjectPlan