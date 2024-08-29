import ProjectGallery from "./ProjectGallery";
import { useState } from "react";
import Pagination from "./Pagination";
import {kitchenData} from '../../utility/projectData'
const KitchenComponent = () => {
  

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(kitchenData.length / itemsPerPage);

  const currentItems = kitchenData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <ProjectGallery data={currentItems} />
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
