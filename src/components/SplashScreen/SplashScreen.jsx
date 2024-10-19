// SplashScreen.js
import React, { useEffect, useState } from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Simulate loading duration (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <div className="brand-name">BHAVANI</div>
      <div className="loading-text">
        Loading
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
