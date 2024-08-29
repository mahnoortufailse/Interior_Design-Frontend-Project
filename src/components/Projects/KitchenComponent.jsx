import ProjectGallery from "./ProjectGallery";
import { useState } from "react";
import Pagination from "./Pagination";
const KitchenComponent = () => {
  const kitchenData = [
    {
      src: "/kitchen1.jpg",
      alt: "Kitchen 1",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen2.jpg",
      alt: "Kitchen 2",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen3.jpg",
      alt: "Kitchen 3",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen4.jpg",
      alt: "Kitchen 4",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen5.jpg",
      alt: "Kitchen 5",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen6.jpg",
      alt: "Kitchen 6",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen7.jpg",
      alt: "Kitchen 7",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "/kitchen8.jpg",
      alt: "Kitchen 8",
      title: "Modern Kitchen",
      description: "Decor / Architecture",
    },
    // Additional entries
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+9",
      alt: "Kitchen 9",
      title: "Contemporary Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+10",
      alt: "Kitchen 10",
      title: "Rustic Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+11",
      alt: "Kitchen 11",
      title: "Industrial Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+12",
      alt: "Kitchen 12",
      title: "Minimalist Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+13",
      alt: "Kitchen 13",
      title: "Modern Farmhouse Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+14",
      alt: "Kitchen 14",
      title: "Elegant Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+15",
      alt: "Kitchen 15",
      title: "Vintage Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+16",
      alt: "Kitchen 16",
      title: "Luxury Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+17",
      alt: "Kitchen 17",
      title: "Open Concept Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+18",
      alt: "Kitchen 18",
      title: "Scandinavian Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+19",
      alt: "Kitchen 19",
      title: "Transitional Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+20",
      alt: "Kitchen 20",
      title: "Traditional Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+21",
      alt: "Kitchen 21",
      title: "Modern Classic Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+22",
      alt: "Kitchen 22",
      title: "Eclectic Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+23",
      alt: "Kitchen 23",
      title: "Urban Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+24",
      alt: "Kitchen 24",
      title: "Farmhouse Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+25",
      alt: "Kitchen 25",
      title: "Small Space Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+26",
      alt: "Kitchen 26",
      title: "Gourmet Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+27",
      alt: "Kitchen 27",
      title: "Luxury Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+28",
      alt: "Kitchen 28",
      title: "Compact Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+29",
      alt: "Kitchen 29",
      title: "Stylish Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+30",
      alt: "Kitchen 30",
      title: "Smart Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+31",
      alt: "Kitchen 31",
      title: "Contemporary Farmhouse Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+32",
      alt: "Kitchen 32",
      title: "Elegant Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+33",
      alt: "Kitchen 33",
      title: "Industrial Chic Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+34",
      alt: "Kitchen 34",
      title: "Luxury Traditional Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+35",
      alt: "Kitchen 35",
      title: "Modern Minimalist Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+36",
      alt: "Kitchen 36",
      title: "Rustic Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+37",
      alt: "Kitchen 37",
      title: "Sleek Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+38",
      alt: "Kitchen 38",
      title: "Urban Modern Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+39",
      alt: "Kitchen 39",
      title: "Classic Contemporary Kitchen",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Kitchen+40",
      alt: "Kitchen 40",
      title: "Vintage Modern Kitchen",
      description: "Decor / Architecture",
    },
  ];

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
