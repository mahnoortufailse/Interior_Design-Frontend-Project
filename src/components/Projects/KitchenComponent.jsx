
import ProjectGallery from "./ProjectGallery";
const KitchenComponent = () => {
  const Kitchen = [
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
  ];
  return (
    <>
       <ProjectGallery data={Kitchen}/>
    </>
  )
}

export default KitchenComponent