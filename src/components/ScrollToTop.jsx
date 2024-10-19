import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"; // Import an icon for the button

// Define keyframes for the up-and-down animation
const moveUpDown = `
  @keyframes moveUpDown {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;

const ScrollToTopButton = styled(Button)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(5),
  right: theme.spacing(2),
  backgroundColor: "linear-gradient(45deg, #6ab04c 30%, #2ecc71 90%)", // Gradient background
  color: "#fff",
  borderRadius: "50%", // Make the button circular
  width: "56px", // Set width
  height: "56px", // Set height
  boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)", // Add shadow
  opacity: 0.9,
  transition: "opacity 0.3s, transform 0.3s",
  animation: "moveUpDown 2s ease-in-out infinite", // Apply animation
  display: "none", // Initially hidden
  "&:hover": {
    opacity: 1,
    transform: "scale(1.1)", // Slightly scale up on hover
  },
}));

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setVisible(true); // Show button after scrolling down 300px
    } else {
      setVisible(false); // Hide button when scrolling up
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{moveUpDown}</style> {/* Add keyframes to the style */}
      <ScrollToTopButton
        onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none", justifyContent: 'center', alignItems: 'center' }} // Toggle visibility and center the icon
        variant="contained"
      >
        <ArrowUpwardIcon /> {/* Icon for the button */}
      </ScrollToTopButton>
    </>
  );
};

export default ScrollToTop;
