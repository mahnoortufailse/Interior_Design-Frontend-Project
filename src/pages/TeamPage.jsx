import PeopleProfile from "../components/AboutComponent/PeopleProfile"
import { PersonData2 } from "../utility/PersonsData"
import HeroAll from "../components/HeroAll"
const TeamPage = () => {
    const data = {
        text: "Our Team",
        image: "./teamBG.jpg"
    }
  return (
    <>
      <HeroAll data={data} />
      <PeopleProfile data={PersonData2} renderAnimatedCard={false} heading={"Our Expert Professionals"}/>
    </>
  )
}

export default TeamPage