import Button2 from "../components/AboutComponent/Button2"
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <>
       <div className="flex flex-col md:flex-row items-center justify-between bg-white w-full gap-12 dark:bg-gray-800 h-[580px]">
        
        <div className="flex flex-col justify-between items-center gap-6 md:w-1/2 abouttext mb-9">
          <h5 className="text-8xl font-bold tracking-tight text-[#CDA274]  dark:text-white max-[640px]:text-2xl font-sans">
            404
          </h5>
          <p className="text-gray-700 mb-2 dark:text-gray-400 text-lg">
          we are sorry, but the page 
          you requested was not found
          </p>
          <Link to="/"><Button2 name={"Back To Home"}/></Link>
          
        </div>
        
        <img
          className="object-cover md:mt-0 md:w-1/2 rounded-none w-full aboutimage  md:rounded-bl-[300px]"
          src="/NotFondPic.jpg"
          alt="Stylish Living"
        />
        
      </div>
    </>
  )
}

export default NotFound