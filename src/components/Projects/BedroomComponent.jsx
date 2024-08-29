import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { useState } from "react";
import { bedRooms } from "../../utility/projectData";
const BedroomComponent = () => {
  

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bedRooms.length / itemsPerPage);

  const currentItems = bedRooms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    console.log(`Page changed to: ${page}`);
    setCurrentPage(page);
  };
  

  return (
    <>
      <ProjectGallery data={currentItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        category="bedroom"
      />
    </>
  );
};

export default BedroomComponent;
