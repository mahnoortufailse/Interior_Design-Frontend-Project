import ProjectGallery from "./ProjectGallery";


const BathroomComponent = () => {
  const bathRooms = [
    {
      src: "/bathroom1.jpg",
      alt: "Bedroom 1",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom2.jpg",
      alt: "Bedroom 2",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom3.jpg",
      alt: "bathroom 3",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom4.jpg",
      alt: "bathroom 4",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom5.jpg",
      alt: "bathroom 5",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom6.jpg",
      alt: "bathroom 6",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom7.jpg",
      alt: "bathroom 7",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bathroom8.jpg",
      alt: "bathroom 8",
      title: "Modern Bathroom",
      description: "Decor / Architecture",
    },
  ];

  return (
    <>
      <ProjectGallery data={bathRooms}/>
    </>
  )
}

export default BathroomComponent