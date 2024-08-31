import ProjectGallery from "./ProjectGallery";
import { useState } from "react";
import Pagination from "./Pagination";
import {kitchenData} from '../../utility/projectData'
import { useNavigate } from "react-router-dom";
const KitchenComponent = () => {
  const navigate = useNavigate();

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(kitchenData.length / itemsPerPage);

  const currentItems = kitchenData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleProjectClick = (project ,category="kitchen") => {
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
      <ProjectGallery data={currentItems} onProjectClick={handleProjectClick}/>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
         category="kitchen"
      />
    </>
  );
};

export default KitchenComponent;
