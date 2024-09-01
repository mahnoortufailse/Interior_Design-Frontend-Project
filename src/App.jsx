import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LayOut from "./pages/LayOut";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceProjectPlan from "./pages/ServiceProjectPlan";
import InteriorDesign from "./pages/InteriorDesign";
import ScrollToTop from "./components/ScrollToTop";
import RetailDesign from "./pages/RetailDesign";
import NotFound from "./pages/NotFound";
import ArtWork from "./pages/ArtWork";
import Decoration from "./pages/Decoration";
import ProjectsPage from "./pages/ProjectsPage";
import Blog from "./pages/Blog";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-gray-800">
      {/* Place ScrollTop here, outside of Routes */}
      <ScrollToTop excludePaths={['/projects/bedroom', '/projects/bath-room', '/projects/kitchen', '/projects/living-room']} />
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/service/projectplan"
            element={<ServiceProjectPlan />}
          />
          <Route
            path="/service/interiorwork"
            element={<InteriorDesign />}
          />
           <Route
            path="/service/retaildesign"
            element={<RetailDesign/>}
          />
          <Route
            path="/service/artwork"
            element={<ArtWork/>}
          />
          <Route
            path="/service/decoration"
            element={<Decoration/>}
          />
           <Route
            path="/projects/*"
            element={<ProjectsPage/>}
          />
          <Route
            path="/blogs"
            element={<Blog/>}
          />
          <Route
            path="/contactus"
            element={<ContactUsPage/>}
          />
         <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />

        </Route>
      </Routes>
    </div>
  );
}
