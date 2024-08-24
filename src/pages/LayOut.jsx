/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"


const LayOut = ({props}) => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default LayOut