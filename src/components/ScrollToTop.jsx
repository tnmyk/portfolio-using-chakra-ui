import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const {  hash } = useLocation();
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return () => {
      unlisten();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (hash) {
      let elem = document.getElementById(hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

export default ScrollToTop;
