/* eslint-disable no-unused-vars */
import { useLocation, useParams } from 'react-router-dom';
import PersonInfo from '../components/TeamPageComponent/PersonInfo';
import HeroAll from '../components/HeroAll';
import PeopleProfile from '../components/AboutComponent/PeopleProfile';
import ContactAboutForm from '../components/AboutComponent/ContactAboutForm';
import { PersonData} from "../utility/PersonsData"
const SingleProfessional = () => {
  const location = useLocation();
  const { user } = location.state;
  const { personName } = useParams();
  const decodedName = personName.replace(/-/g, ' ');
  const data = {
    text: decodedName,
    image: "/SingleProfessionalBG.jpg"
}
  return (<>
     <HeroAll data={data}/>
     <PersonInfo user={user}/>
     <PeopleProfile data={PersonData} renderAnimatedCard={true} heading={"Our Team Member"}/>
     <ContactAboutForm heading={"Contact Me"}/>
  </>);
};

export default SingleProfessional;
