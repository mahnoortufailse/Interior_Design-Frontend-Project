import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import LayOut from "./pages/LayOut";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceProjectPlan from "./pages/ServiceProjectPlan";
import InteriorDesign from "./pages/InteriorDesign";
import ScrollTop from "./components/ScrollTop";
import RetailDesign from "./pages/RetailDesign";
import NotFound from "./pages/NotFound";
import ArtWork from "./pages/ArtWork";
import Decoration from "./pages/Decoration";

export default function App() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-gray-800">
      {/* Place ScrollTop here, outside of Routes */}
      <ScrollTop />
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
         <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />

        </Route>
      </Routes>
    </div>
  );
}
