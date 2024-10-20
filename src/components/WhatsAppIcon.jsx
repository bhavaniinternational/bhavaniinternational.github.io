// WhatsAppFloatingButton.js
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const WhatsAppContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(7),
  left: theme.spacing(2),
  backgroundColor: "#25D366", // WhatsApp color
  borderRadius: "50%", // Circular button
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)", // Scale on hover
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.3)",
  },
  zIndex: 1, // Ensure it's above other content
}));

const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    // Open WhatsApp chat (Replace with your desired phone number)
    window.open('https://wa.me/9423379542', '_blank'); // Replace with the desired phone number
  };

  return (
    <WhatsAppContainer onClick={handleClick}>
      <IconButton aria-label="WhatsApp" sx={{ color: "white" }}>
        <WhatsAppIcon sx={{ fontSize: "40px" }} />
      </IconButton>
    </WhatsAppContainer>
  );
};

export default WhatsAppFloatingButton;
