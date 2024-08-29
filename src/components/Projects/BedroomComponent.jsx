import ProjectGallery from "./ProjectGallery";
import Pagination from "./Pagination";
import { useState } from "react";
const BedroomComponent = () => {
  const bedRooms = [
    {
      src: "/bedroom1.png",
      alt: "Bedroom 1",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom2.png",
      alt: "Bedroom 2",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom3.png",
      alt: "Bedroom 3",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom4.png",
      alt: "Bedroom 4",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom5.png",
      alt: "Bedroom 5",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom6.png",
      alt: "Bedroom 6",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom7.png",
      alt: "Bedroom 7",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom8.png",
      alt: "Bedroom 8",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1593642634440-df8cf82a8c1c",
      alt: "Bedroom 9",
      title: "Elegant Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1517632317681-8a0de4467f8d",
      alt: "Bedroom 10",
      title: "Trendy Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1506809312040-75f0e4e00bbd",
      alt: "Bedroom 11",
      title: "Comfortable Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1506748686214-e9df14f2f4d6",
      alt: "Bedroom 12",
      title: "Serene Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1605714747935-2b953cd0d4da",
      alt: "Bedroom 13",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1526062638024-d209e3a9d687",
      alt: "Bedroom 14",
      title: "Luxurious Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1611854769640-325d7e1b0a0c",
      alt: "Bedroom 15",
      title: "Sophisticated Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1602795968603-b0c496c2b470",
      alt: "Bedroom 16",
      title: "Bright Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1526391430073-64f90ac13260",
      alt: "Bedroom 17",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1574158622680-dc38d6e4e7b8",
      alt: "Bedroom 18",
      title: "Elegant Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1593642634440-b73e4a05c35e",
      alt: "Bedroom 19",
      title: "Contemporary Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1593642634434-4a1d1a3f3c71",
      alt: "Bedroom 20",
      title: "Comfortable Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1593642634302-d82c3bb1c9cf",
      alt: "Bedroom 21",
      title: "Chic Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1593642634347-001b67f010c3",
      alt: "Bedroom 22",
      title: "Stylish Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1602781710383-f5292b7d7224",
      alt: "Bedroom 23",
      title: "Serene Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1577820501982-6c0f0d82d6d0",
      alt: "Bedroom 24",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1596463431598-94b6d65031a6",
      alt: "Bedroom 25",
      title: "Luxurious Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1550686812-dc963c6097ec",
      alt: "Bedroom 26",
      title: "Sophisticated Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1612257945452-0343b67fd30e",
      alt: "Bedroom 27",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1597342709347-1efc19181024",
      alt: "Bedroom 28",
      title: "Elegant Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1582424571544-df0397f17869",
      alt: "Bedroom 29",
      title: "Trendy Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1561043188-9535f12c5e04",
      alt: "Bedroom 30",
      title: "Chic Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1608796239300-fd98b72e3d4c",
      alt: "Bedroom 31",
      title: "Comfortable Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1608994559443-4b1f9d2a929f",
      alt: "Bedroom 32",
      title: "Stylish Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1605098108202-cf97ae421f07",
      alt: "Bedroom 33",
      title: "Cozy Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1623737270281-0bde6bb4b1b2",
      alt: "Bedroom 34",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1614233799301-b1e0206b609e",
      alt: "Bedroom 35",
      title: "Elegant Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1611348605785-245285f91cf7",
      alt: "Bedroom 36",
      title: "Comfortable Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1604798498173-d0d02b6007e4",
      alt: "Bedroom 37",
      title: "Luxurious Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1601945569018-6a5297b5f1ea",
      alt: "Bedroom 38",
      title: "Modern Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1615567902110-b4df4d2f7f7c",
      alt: "Bedroom 39",
      title: "Chic Bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "https://images.unsplash.com/photo-1563425964-d33f4ff6d7d5",
      alt: "Bedroom 40",
      title: "Stylish Bedroom",
      description: "Decor / Architecture",
    },
  ];

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
