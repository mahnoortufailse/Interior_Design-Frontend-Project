/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ excludePaths = [] }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!excludePaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname, excludePaths]);

  return null;
};

export default ScrollToTop;
