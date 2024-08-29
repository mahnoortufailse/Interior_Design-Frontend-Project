import { useState } from "react";
import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";

const BathroomComponent = () => {
  const bathRooms = [
    // First 8 local images
    { src: "/bathroom1.jpg", alt: "Bathroom 1", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom2.jpg", alt: "Bathroom 2", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom3.jpg", alt: "Bathroom 3", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom4.jpg", alt: "Bathroom 4", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom5.jpg", alt: "Bathroom 5", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom6.jpg", alt: "Bathroom 6", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom7.jpg", alt: "Bathroom 7", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "/bathroom8.jpg", alt: "Bathroom 8", title: "Modern Bathroom", description: "Decor / Architecture" },
    
    // Next 32 random images from Unsplash
    { src: "https://source.unsplash.com/random/800x600?bathroom9", alt: "Bathroom 9", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom10", alt: "Bathroom 10", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom11", alt: "Bathroom 11", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom12", alt: "Bathroom 12", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom13", alt: "Bathroom 13", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom14", alt: "Bathroom 14", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom15", alt: "Bathroom 15", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom16", alt: "Bathroom 16", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom17", alt: "Bathroom 17", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom18", alt: "Bathroom 18", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom19", alt: "Bathroom 19", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom20", alt: "Bathroom 20", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom21", alt: "Bathroom 21", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom22", alt: "Bathroom 22", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom23", alt: "Bathroom 23", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom24", alt: "Bathroom 24", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom25", alt: "Bathroom 25", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom26", alt: "Bathroom 26", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom27", alt: "Bathroom 27", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom28", alt: "Bathroom 28", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom29", alt: "Bathroom 29", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom30", alt: "Bathroom 30", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom31", alt: "Bathroom 31", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom32", alt: "Bathroom 32", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom33", alt: "Bathroom 33", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom34", alt: "Bathroom 34", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom35", alt: "Bathroom 35", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom36", alt: "Bathroom 36", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom37", alt: "Bathroom 37", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom38", alt: "Bathroom 38", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom39", alt: "Bathroom 39", title: "Modern Bathroom", description: "Decor / Architecture" },
    { src: "https://source.unsplash.com/random/800x600?bathroom40", alt: "Bathroom 40", title: "Modern Bathroom", description: "Decor / Architecture" },
  ];

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
