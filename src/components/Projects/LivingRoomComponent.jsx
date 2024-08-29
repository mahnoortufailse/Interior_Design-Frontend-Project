import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { useState } from "react";
const LivingRoomComponent = () => {
  const livingAreas = [
    {
      src: "/LivingArea1.jpg",
      alt: "Living Area 1",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea2.jpg",
      alt: "Living Area 2",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea3.jpg",
      alt: "Living Area 3",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea4.jpg",
      alt: "Living Area 4",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea5.jpg",
      alt: "Living Area 5",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea6.jpg",
      alt: "Living Area 6",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea7.jpg",
      alt: "Living Area 7",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "/LivingArea8.jpg",
      alt: "Living Area 8",
      title: "Modern Living Area",
      description: "Decor / Architecture",
    },
    // Additional entries
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+9",
      alt: "Living Area 9",
      title: "Contemporary Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+10",
      alt: "Living Area 10",
      title: "Rustic Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+11",
      alt: "Living Area 11",
      title: "Industrial Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+12",
      alt: "Living Area 12",
      title: "Minimalist Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+13",
      alt: "Living Area 13",
      title: "Modern Farmhouse Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+14",
      alt: "Living Area 14",
      title: "Elegant Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+15",
      alt: "Living Area 15",
      title: "Vintage Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+16",
      alt: "Living Area 16",
      title: "Luxury Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+17",
      alt: "Living Area 17",
      title: "Open Concept Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+18",
      alt: "Living Area 18",
      title: "Scandinavian Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+19",
      alt: "Living Area 19",
      title: "Transitional Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+20",
      alt: "Living Area 20",
      title: "Traditional Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+21",
      alt: "Living Area 21",
      title: "Modern Classic Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+22",
      alt: "Living Area 22",
      title: "Eclectic Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+23",
      alt: "Living Area 23",
      title: "Urban Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+24",
      alt: "Living Area 24",
      title: "Farmhouse Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+25",
      alt: "Living Area 25",
      title: "Small Space Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+26",
      alt: "Living Area 26",
      title: "Gourmet Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+27",
      alt: "Living Area 27",
      title: "Luxury Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+28",
      alt: "Living Area 28",
      title: "Compact Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+29",
      alt: "Living Area 29",
      title: "Stylish Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+30",
      alt: "Living Area 30",
      title: "Smart Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+31",
      alt: "Living Area 31",
      title: "Contemporary Farmhouse Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+32",
      alt: "Living Area 32",
      title: "Elegant Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+33",
      alt: "Living Area 33",
      title: "Industrial Chic Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+34",
      alt: "Living Area 34",
      title: "Luxury Traditional Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+35",
      alt: "Living Area 35",
      title: "Modern Minimalist Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+36",
      alt: "Living Area 36",
      title: "Rustic Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+37",
      alt: "Living Area 37",
      title: "Sleek Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+38",
      alt: "Living Area 38",
      title: "Urban Modern Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+39",
      alt: "Living Area 39",
      title: "Classic Contemporary Living Area",
      description: "Decor / Architecture",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Living+Area+40",
      alt: "Living Area 40",
      title: "Vintage Modern Living Area",
      description: "Decor / Architecture",
    },
  ];

  const itemsPerPage = 8; // Adjust as needed
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(livingAreas.length / itemsPerPage);

  const currentItems = livingAreas.slice(
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
        category="living-room"
      />
    </>
  );
};

export default LivingRoomComponent;
