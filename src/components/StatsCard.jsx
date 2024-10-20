import React, { useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Container for the StatsCard
const StatsCardContainer = styled(Box)(({ theme }) => ({
  width: "70vw",
  height: "200px", // Base height
  borderRadius: "0px 100px 100px 0px",
  padding: theme.spacing(2),
  background: "linear-gradient(to right, #2A78BE, #66CCFF)",
  boxShadow: `5px 5px 15px rgba(0, 0, 0, 0.2)`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
  color: "white",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row", // Stack items vertically on smaller screens
    height: "auto", // Allow height to adjust automatically
    gap: 10,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw", // Adjust width for small screens
    padding: theme.spacing(1.5),
  },
}));

// Title for the StatsCard
const StatsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.9rem",
  width: "33%",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem", // Decrease font size on medium screens
    width: "100%", // Full width on smaller screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem", // Decrease font size further on small screens
  },
}));

// Content for the StatsCard
const StatsContent = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  width: "100%",
  textAlign: "center",
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem", // Adjust font size on medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem", // Adjust font size for small screens
  },
}));

const StatsCard = () => {
  const [productionProjects, setProductionProjects] = useState(0);
  const [engineeringTeam, setEngineeringTeam] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Function to animate the numbers
  const animateNumber = (value, setter) => {
    let count = 0;
    const increment = Math.ceil(value / 300);

    const interval = setInterval(() => {
      count += increment;
      if (count >= value) {
        clearInterval(interval);
        setter(value);
      } else {
        setter(count);
      }
    }, 60);
  };

  // Intersection Observer to trigger animation when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateNumber(50, setProductionProjects);
      animateNumber(10, setEngineeringTeam);
    }
  }, [isVisible]);

  return (
    <StatsCardContainer ref={cardRef}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="33%"
      >
        <StatsTitle>2023</StatsTitle>
        <StatsContent>FOUNDING YEAR</StatsContent>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="33%"
      >
        <StatsTitle>{productionProjects}+</StatsTitle>
        <StatsContent>PRODUCTION PROJECTS</StatsContent>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="33%"
      >
        <StatsTitle>{engineeringTeam}+</StatsTitle>
        <StatsContent>ENGINEERING TEAM</StatsContent>
      </Box>
    </StatsCardContainer>
  );
};

export default StatsCard;
