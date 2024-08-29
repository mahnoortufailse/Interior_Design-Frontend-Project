import HeroAll from "../components/HeroAll";
import Category from "../components/Projects/Category";
import BedroomComponent from "../components/Projects/BedroomComponent";
import BathroomComponent from "../components/Projects/BathroomComponent";
import KitchenComponent from "../components/Projects/KitchenComponent";
import LivingRoomComponent from "../components/Projects/LivingRoomComponent";
import { Route, Routes, Navigate } from "react-router-dom";

const ProjectsPage = () => {
  const data = {
    text: "Our Projects",
    image: "/projectsBG.jpg",
  };

  return (
    <>
      <HeroAll data={data} />
      <div className="p-14">
        <Category />
        <div className="mt-6 w-full">
          <Routes>
            {/* Default route redirects to bedroom/page/1 */}
            <Route path="/" element={<Navigate to="bedroom/page/1" replace />} />
            <Route path="bedroom/page/:page" element={<BedroomComponent />} />
            <Route path="bath-room/page/:page" element={<BathroomComponent />} />
            <Route path="kitchen/page/:page" element={<KitchenComponent />} />
            <Route path="living-room/page/:page" element={<LivingRoomComponent />} />
            {/* Fallback route redirects to bedroom/page/1 */}
            <Route path="*" element={<Navigate to="bedroom/page/1" replace />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
