import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LayOut from "./pages/LayOut";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ServiceProjectPlan from "./pages/ServiceProjectPlan";

export default function App() {
  return (
    <div className="bg-[#FFFFFF] dark:bg-gray-800">
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/projectplaning"
            element={<ServiceProjectPlan />}
          />
        </Route>
      </Routes>
    </div>
  );
}
