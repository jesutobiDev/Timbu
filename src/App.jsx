import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Homepage from "./components/Homepage/Homepage";
import ProductListings from "./components/ProductListings/ProductListings";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  useEffect(() => {
    if (toggleNav) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [toggleNav]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              handleToggleNav={handleToggleNav}
              toggleNav={toggleNav}
              cartStrokeColor="#ff0000"
              linkBgColor="#00ff00"
              linkTextColor="#0000ff"
            />
          }
        />
        <Route
          path="/listings"
          element={
            <ProductListings
              handleToggleNav={handleToggleNav}
              toggleNav={toggleNav}
              cartStrokeColor="#121211"
              linkBgColor="#121211"
              linkTextColor="#F3F2E8"
            />
          }
        />
        {/* Add more routes as needed */}
      </Routes>
  );
};

export default App;