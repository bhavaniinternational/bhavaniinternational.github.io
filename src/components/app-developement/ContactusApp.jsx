import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

// Container for the entire component
const FastWebDevContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
  textAlign: "center",
  borderRadius: "12px", // Optional: add border radius for rounded corners
}));

// Title styling
const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.8rem", // Title font size
  margin: "auto",
  width: "60%",
  color: "#4C98FD",
  marginBottom: 50,
}));

// Content styling
const Content = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: "70%", // Adjust width for better readability
  margin: "0 auto",
  fontSize: "0.8rem", // Content font size
  lineHeight: 1.5, // Line height for better text spacing
}));

// Italic Content styling
const ItalicContent = styled(Content)(({ theme }) => ({
  fontStyle: "italic",
  color: "#007BFF", // Blue color for italic text
  marginTop: 10,
  fontSize: "1rem",
}));

// Button styling
const ContactButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#4C98FD", // Button background color
  color: "#fff", // Button text color
  padding: theme.spacing(1.5, 4), // Add padding for a larger button
  borderRadius: "30px", // Rounded corners
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow effect
  fontWeight: 600, // Bold text
  transition: "background-color 0.3s, transform 0.3s", // Smooth transition for hover effects
  "&:hover": {
    backgroundColor: "#3a7bc3", // Darker shade on hover
    transform: "translateY(-2px)", // Slight lift effect on hover
  },
  marginTop: 20,
}));

// Container for the italic content and button
const GradientContainer = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to bottom, white, #AEEEEE)", // Gradient background
  borderRadius: "8px", // Optional: add border radius for rounded corners
  padding: theme.spacing(3), // Adjust padding as necessary
  marginTop: theme.spacing(3), // Spacing above this container
  textAlign: "center", // Center text
  paddingTop: 50,
  paddingBottom: 50,
}));

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ContactusApp = () => {
  let navigate = useNavigate();
  return (
    <FastWebDevContainer>
      <GradientContainer>
        <ItalicContent>
          Choose Bhavani app development services to build superb apps that
          enhance your digital presence across all platforms. Contact us today
          to discover our development process and learn how we can help bring
          your mobile app vision to life!
        </ItalicContent>
        <ContactButton
          variant="contained"
          onClick={() => {
            navigate("/");
            setTimeout(() => {
              scrollToSection("contact");
            }, 100);
          }}
        >
          CONTACT US
        </ContactButton>
      </GradientContainer>
    </FastWebDevContainer>
  );
};

export default ContactusApp;
