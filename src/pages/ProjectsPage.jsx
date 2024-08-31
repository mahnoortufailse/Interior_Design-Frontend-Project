import { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HeroAll from "../components/HeroAll";
import Category from "../components/Projects/Category";
import BedroomComponent from "../components/Projects/BedroomComponent";
import BathroomComponent from "../components/Projects/BathroomComponent";
import KitchenComponent from "../components/Projects/KitchenComponent";
import LivingRoomComponent from "../components/Projects/LivingRoomComponent";
import ProjectDetails from "../pages/ProjectDetails";

const ProjectsPage = () => {
  const location = useLocation();
  const categoryRef = useRef(null);

  // Determine if the current path is a project detail page
  const isProjectDetailPage = location.pathname.includes("/project-detail");

  useEffect(() => {
    if (
      categoryRef.current &&
      location.pathname === "/projects/bedroom/page/1"
    ) {
      return;
    }
    // Scroll to the Category component when the location changes and not on a project detail page
    if (categoryRef.current && !isProjectDetailPage) {
      categoryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname, isProjectDetailPage]);

  return (
    <>
      {/* Only render HeroAll and Category when not on a project detail page */}
      {!isProjectDetailPage && (
        <>
          <HeroAll data={{ text: "Our Projects", image: "/projectsBG.jpg" }} />
          <div className="p-14 max-[640px]:p-3">
            {/* Assign ref to Category component */}
            <div ref={categoryRef}>
              <Category />
            </div>
          </div>
        </>
      )}

      <div className={isProjectDetailPage ? "p-6" : "p-9 max-[640px]:p-3"}>
        <Routes>
          {/* Default route redirects to bedroom/page/1 */}
          <Route path="/" element={<Navigate to="bedroom/page/1" replace />} />
          <Route path="bedroom/page/:page/*" element={<BedroomComponent />} />
          <Route
            path="bath-room/page/:page/*"
            element={<BathroomComponent />}
          />
          <Route path="kitchen/page/:page/*" element={<KitchenComponent />} />
          <Route
            path="living-room/page/:page/*"
            element={<LivingRoomComponent />}
          />

          {/* Route for project details under each category */}
          <Route
            path=":category/page/:page/project-detail"
            element={<ProjectDetails />}
          />

          {/* Fallback route redirects to bedroom/page/1 */}
          <Route path="*" element={<Navigate to="bedroom/page/1" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default ProjectsPage;
