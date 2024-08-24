import AboutCom from "../components/AboutCom";
import Cards from "../components/Cards";
import ClientLogo from "../components/ClientLogo";
import { ContactForm } from "../components/contactForm";
import Hero from "../components/Hero";
import InformationTag from "../components/informationTag";
import { Projects } from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";

const Home = () => {
  return (
    <>
     
      <Hero />
      <Work />
      <AboutCom/>
      <Testimonial/>
      <ClientLogo/>
      <Projects/>
      <InformationTag/>
      <Cards/>
      <ContactForm/>
      
    </>
  );
};

export default Home;
