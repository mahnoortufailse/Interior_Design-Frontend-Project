import HeroAll from "../components/HeroAll";
import Category from "../components/Projects/Category";
import BedroomComponent from "../components/Projects/BedroomComponent";
import BathroomComponent from "../components/Projects/BedroomComponent";
import KitchenComponent from "../components/Projects/KitchenComponent";
import LivingRoomComponent from "../components/Projects/LivingRoomComponent";
import { Route, Routes , Navigate} from "react-router-dom";

const ProjectsPage = () => {
  const data = {
    text: "Our Projects",
    image: "/projectsBG.jpg",
  };
  return (
    <>
      <HeroAll data={data} />
      <Category />
   
        <div className="mt-12 w-full">
        <Routes>
          <Route path="bedroom" element={<BedroomComponent />} />
          <Route path="bathroom" element={<BathroomComponent />} />
          <Route path="kitchen" element={<KitchenComponent />} />
          <Route path="living-room" element={<LivingRoomComponent />} />
          {/* Default route to bedroom */}
          <Route path="/" element={<Navigate to="bedroom" replace />} />
        </Routes>
        </div>
    </>
  );
};

export default ProjectsPage;
