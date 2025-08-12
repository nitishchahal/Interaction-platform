import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is used for older browsers
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: Adds a smooth scrolling effect
    });
  }, [pathname]); // This dependency array ensures the effect runs whenever the route changes

  return null; // This component doesn't render anything
}