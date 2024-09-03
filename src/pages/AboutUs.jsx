import BlockQuote from "../components/AboutComponent/BlockQuote"
import CardsAbout from "../components/AboutComponent/CardsAbout"
import ContactAboutForm from "../components/AboutComponent/ContactAboutForm"
import HeroAll from "../components/HeroAll"
import PeopleProfile from "../components/AboutComponent/PeopleProfile"
import { PersonData } from "../utility/PersonsData"
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
     <PeopleProfile data={PersonData} renderAnimatedCard={true} heading={"What the People Thinks About Us"}/>
     <ContactAboutForm heading={"Creative project? Let's have a productive talk."}/>
    </>
  )
}

export default AboutUs