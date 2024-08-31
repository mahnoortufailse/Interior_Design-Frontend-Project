import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { useState } from "react";
import { livingAreas } from "../../utility/projectData";

import { useNavigate } from "react-router-dom";
const LivingRoomComponent = () => {
  const navigate = useNavigate();
  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(livingAreas.length / itemsPerPage);

  const currentItems = livingAreas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleProjectClick = (project ,category="living-room") => {
    console.log("Navigating to project-detail with project:", project);
    navigate(`/projects/${category}/page/${currentPage}/project-detail`, {
      state: project,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <ProjectGallery data={currentItems} onProjectClick={handleProjectClick} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        category="living-room"
      />
    </>
  );
};

export default LivingRoomComponent;
