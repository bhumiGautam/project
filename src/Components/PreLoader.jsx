

import React from 'react'
import { useState, useEffect } from 'react';
import './Preloader.css'; // Import your CSS file for styling
import { FaSpinner } from 'react-icons/fa';

const PreLoader = () => {

  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 100) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 50); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="preloader">
    //     {/* <center> */}
    //   <div className="letter T">T</div>
    //   <div className="letter V">v</div>
    //   <div className="letter D">D</div>
    //   <div className="letter I">i</div>
    //   <div className="letter S">s</div>
    //   <div className="letter T2">t</div>
    //   <div className="letter R">r</div>
    //   <div className="letter I2">i</div>
    //   <div className="letter B">b</div>
    //   <div className="letter U">u</div>
    //   <div className="letter T3">t</div>
    //   <div className="letter I3">i</div>
    //   <div className="letter O">o</div>
    //   <div className="letter N">n</div>
    //   {/* </center> */}
    //   <br />
    //   <div className="letter distributing-dream">distributing dreams</div>
    // </div>
    <div className="preloader">
      <div className="neon">Loading</div>
      <div className="numbers">{count < 10 ? `0${count}` : count}</div>
    </div>
  );
};

export default PreLoader;
