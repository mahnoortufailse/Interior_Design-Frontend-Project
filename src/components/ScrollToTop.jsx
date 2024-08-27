/* eslint-disable react/prop-types */
// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ excludePaths = [] }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Apply scroll-to-top if the current path is not in the excludePaths list
    if (!excludePaths.some((path) => pathname.startsWith(path))) {
      window.scrollTo(0, 0);
    }
  }, [pathname, excludePaths]);

  return null;
};

export default ScrollToTop;
