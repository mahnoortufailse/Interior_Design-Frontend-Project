import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { bathRooms } from "../../utility/projectData";
import ProjectDetails from "../../pages/ProjectDetails";
import { Routes, Route, useNavigate } from "react-router-dom";

const BathroomComponent = () => {
  const navigate = useNavigate();

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bathRooms.length / itemsPerPage);

  const currentItems = bathRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  const handleProjectClick = (project) => {
    // Navigate to the project-detail route and pass project data
    navigate("project-detail", { state: project });
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProjectGallery data={currentItems} onProjectClick={handleProjectClick}/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
         category="bath-room"
      />
      <Routes>
        <Route path="project-detail" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default BathroomComponent;
