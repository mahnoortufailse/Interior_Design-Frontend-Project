import { ContactForm } from "../components/contactForm"
import HeroAll from "../components/HeroAll"
import ServicesCards from "../components/ServicesComponent/ServicesCards"
import WeWork from "../components/ServicesComponent/WeWork"

const Services = () => {
    const data = {
        text: "Our Services",
        image: "./ServiceNewBG.png"
    }
    return (
        <>
            <HeroAll data={data} />
            <ServicesCards/>
            <WeWork/>
            <ContactForm/>
        </>
    )
}

export default Services
