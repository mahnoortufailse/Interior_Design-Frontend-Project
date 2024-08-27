import ProjectGallery from "./ProjectGallery"

const BedroomComponent = () => {
  const bedRooms = [
    {
      src: "/bedroom1.png",
      alt: "Bedroom 1",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom2.png",
      alt: "Bedroom 2",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom3.png",
      alt: "Bedroom 3",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom4.png",
      alt: "Bedroom 4",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom5.png",
      alt: "Bedroom 5",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom6.png",
      alt: "Bedroom 6",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom7.png",
      alt: "Bedroom 7",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
    {
      src: "/bedroom8.png",
      alt: "Bedroom 8",
      title: "Modern bedroom",
      description: "Decor / Architecture",
    },
  ];

  return (
    <>
     <ProjectGallery data={bedRooms}/>
    </>
  )
}

export default BedroomComponent