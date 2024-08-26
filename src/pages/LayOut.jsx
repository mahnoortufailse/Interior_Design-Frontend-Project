/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet, useLocation  } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const LayOut = ({props}) => {
  const location = useLocation();

  // Check if the current path is the NotFound page
  const isNotFoundPage = location.pathname === "/404";
  return (
    <>
        {!isNotFoundPage && <NavBar/>}
        <Outlet/>
        {!isNotFoundPage && <Footer />}
    </>
  )
}

export default LayOut