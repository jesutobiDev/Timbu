
import  { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Homepage from './components/Homepage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  }

  useEffect(() => {
    if (toggleNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    
    // Cleanup function to reset overflow style when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [toggleNav]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <Homepage handleToggleNav={handleToggleNav} toggleNav={toggleNav} />}
    </>
  );
};

export default App;
