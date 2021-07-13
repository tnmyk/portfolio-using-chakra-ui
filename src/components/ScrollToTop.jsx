import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname ,hash} = useLocation();
  useEffect(() => {
    if (hash) {
      let elem = document.getElementById(hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [pathname,hash]);
  return null;
};

export default ScrollToTop;
