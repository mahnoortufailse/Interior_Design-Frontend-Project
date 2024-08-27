import ProjectGallery from "./ProjectGallery"

const LivingRoomComponent = () => {
    const LivingAreas = [
        {
          src: "/LivingArea1.jpg",
          alt: "Bedroom 1",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea2.jpg",
          alt: "LivingArea 2",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea3.jpg",
          alt: "LivingArea 3",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea4.jpg",
          alt: "LivingArea 4",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea5.jpg",
          alt: "LivingArea 5",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea6.jpg",
          alt: "LivingArea 6",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea7.jpg",
          alt: "LivingArea 7",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
        {
          src: "/LivingArea8.jpg",
          alt: "LivingArea 8",
          title: "Modern LivingArea",
          description: "Decor / Architecture",
        },
      ];
  return (
    <>
       <ProjectGallery data={LivingAreas}/>
    </>
  )
}

export default LivingRoomComponent