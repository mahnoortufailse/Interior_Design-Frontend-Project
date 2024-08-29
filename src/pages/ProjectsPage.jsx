import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HeroAll from "../components/HeroAll";
import Category from "../components/Projects/Category";
import BedroomComponent from "../components/Projects/BedroomComponent";
import BathroomComponent from "../components/Projects/BathroomComponent";
import KitchenComponent from "../components/Projects/KitchenComponent";
import LivingRoomComponent from "../components/Projects/LivingRoomComponent";

const ProjectsPage = () => {
  const location = useLocation();
  const categoryRef = useRef(null);

  useEffect(() => {
    // Scroll to the Category component when the location changes
    if (categoryRef.current) {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <HeroAll data={{ text: "Our Projects", image: "/projectsBG.jpg" }} />
      <div className="p-14">
        {/* Assign ref to Category component */}
        <div ref={categoryRef}>
          <Category />
        </div>
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
