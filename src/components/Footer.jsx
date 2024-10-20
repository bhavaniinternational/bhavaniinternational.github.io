import React, { useState, useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled footer container
const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  borderTop: `1px solid ${theme.palette.divider}`,
  flexDirection: "column", // Stack items vertically on small screens
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row", // Row layout on larger screens
  },
}));

// Styled section for left content
const LeftSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontWeight: 900,
  marginBottom: theme.spacing(2), // Add margin at the bottom for small screens
  [theme.breakpoints.up("sm")]: {
    marginBottom: 0, // Remove margin on larger screens
    flex: 1, // Take equal space on larger screens
  },
}));

// Styled section for right content with vertical alignment
const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-end", // Align items to the right on larger screens
    flex: 1, // Take equal space on larger screens
  },
}));

// Keyframes for the hover animation
const keyframes = `
  @keyframes hoverEffect {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(-2px);
    }
  }
`;

// Styled Link with hover effect
const StyledLink = styled(Link)(({ theme }) => ({
  color: "white",
  position: "relative",
  animation: "none",
  transition: "transform 0.3s ease",
  "&:hover": {
    animation: "hoverEffect 0.5s forwards",
  },
  "&:active": {
    transform: "translateX(-5px)", // Shift left on click
  },
}));

// Social Media Links
const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  // { name: "Telegram", url: "https://telegram.org" },
  { name: "Instagram", url: "https://www.instagram.com/bhavaniinternational/" },
];

const Footer = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const currentDate = new Date();
      const time = currentDate.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimeString(time);
    };

    // Update the time immediately
    updateTime();

    // Set an interval to update the time every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const dateString = currentDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <style>{keyframes}</style> {/* Add keyframes directly */}
      <FooterContainer>
        <LeftSection>
          <Typography variant="body2" style={{ color: "white" }}>
            {`${year} © Edition`}
          </Typography>
          <Typography variant="body2" style={{ color: "white", fontWeight: 700 }}>
            {`${dateString} ${timeString}`}
          </Typography>
        </LeftSection>
        <RightSection>
          <Typography variant="body2" style={{ color: "white" }}>
            Social:
          </Typography>
          <Box display="flex" gap="10px">
            {socialLinks.map((link) => (
              <StyledLink
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener"
              >
                {link.name}
              </StyledLink>
            ))}
          </Box>
        </RightSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
