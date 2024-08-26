import BlockQuote from "../components/AboutComponent/BlockQuote"
import CardsAbout from "../components/AboutComponent/CardsAbout"
import ContactAboutForm from "../components/AboutComponent/ContactAboutForm"
import HeroAll from "../components/HeroAll"
import PeopleProfile from "../components/AboutComponent/PeopleProfile"


const AboutUs = () => {
  const data = {
    text: "About Us",
    image: "./AboutUsNewBG.png"
}
  return (
    <>
     <HeroAll data={data}/>
     <BlockQuote/>
     <CardsAbout/>
     <PeopleProfile/>
     <ContactAboutForm/>
    </>
  )
}

export default AboutUs