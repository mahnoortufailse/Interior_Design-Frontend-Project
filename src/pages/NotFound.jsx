import Button2 from "../components/AboutComponent/Button2";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white w-full gap-8 dark:bg-gray-800 h-auto">
      <div className="flex flex-col justify-between items-center gap-6 md:w-1/2 text-center md:text-left p-12 md:pl-8">
        <h5 className="text-6xl md:text-8xl font-bold tracking-tight text-[#CDA274] dark:text-white font-sans">
          404
        </h5>
        <p className="text-gray-700 dark:text-gray-400 text-base md:text-lg text-center">
          We are sorry, but the page you requested was not found.
        </p>
        <Link to="/">
          <Button2 name={"Back To Home"} />
        </Link>
      </div>

      <div className="md:w-1/2 w-full">
        <img
          className="object-cover w-full h-full rounded-none md:rounded-bl-[300px]"
          src="/NotFondPic.jpg"
          alt="Stylish Living"
        />
      </div>
    </div>
  );
};

export default NotFound;
