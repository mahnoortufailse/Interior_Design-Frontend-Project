import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { bathRooms } from "../../utility/projectData";
const BathroomComponent = () => {
  

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(bathRooms.length / itemsPerPage);

  const currentItems = bathRooms.slice(
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
         category="bath-room"
      />
    </>
  );
};

export default BathroomComponent;
