import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const MissionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(4),
  textAlign: "center",
}));

const MissionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  width: "80%",
  margin: "0 auto",
  fontSize: "1.8rem", // Increased font size for emphasis
}));

const MissionContent = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  width: "40%", // Wider width for better readability
  margin: "0 auto",
  fontSize: "0.9rem", // Increased font size for clarity
  lineHeight: 1.5, // Added line height for better text spacing
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    width: "90%", // Increase width on small screens
    fontSize: "0.8rem", // Adjust font size for small screens
  },
}));

const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing(4), // Increased gap for better spacing
  marginTop: theme.spacing(4), // Add space above boxes
}));

const InfoBox = styled(Box)(({ theme }) => ({
  width: "380px", // Slightly reduced width for better layout
  minHeight: "250px", // Set a fixed height for uniformity
  borderRadius: "12px 12px 40px 12px", // Increased border radius for smoother corners
  padding: theme.spacing(4),
  borderTop: "4px solid #4C98FD",
  transition: "transform 0.3s, box-shadow 0.3s", // Added shadow transition
  boxShadow: `5px 5px 15px rgba(76, 152, 253, 0.3)`,
  justifyContent: "space-between", // Space between title and content
  "&:hover": {
    transform: "translateY(-5px)", // Lift effect on hover
    boxShadow: `10px 10px 20px rgba(76, 152, 253, 0.5)`, // More pronounced shadow on hover
  },
}));

const BoxTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  fontSize: "1.2rem", // Increased font size for box titles
  color: "#4C98FD", // Color change for titles
}));

const BoxContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem", // Adjusted font size for content
  lineHeight: 1.4, // Added line height for better readability
}));

const CenteredBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  marginTop: theme.spacing(4), // Increased space above the centered box
}));

const MissionStatement = () => {
  return (
    <MissionContainer>
      <MissionTitle variant="h5">
        Our mission at <span style={{ color: "#4C98FD" }}>Bhavani</span>
      </MissionTitle>
      <MissionContent>
        At Bhavani, we're dedicated to turning visionary ideas into amazing
        digital realities, with little to no effort from our clients. As a top
        software development company, our mission is to digitally empower
        businesses to thrive in a new and exciting online landscape through
        cutting-edge web and mobile application solutions.
      </MissionContent>

      <BoxContainer>
        <InfoBox>
          <BoxTitle variant="h6">Diversity in web and app flexibility</BoxTitle>
          <BoxContent>
            Whether you’re looking to captivate with a progressive web app,
            engage users on iOS platforms, or scale with Native mobile apps, we
            bring your vision to life with surgical precision.
          </BoxContent>
        </InfoBox>

        <InfoBox>
          <BoxTitle variant="h6">More than a partner to your vision</BoxTitle>
          <BoxContent>
            We're not just developers; we're innovators committed to premium
            services. Our team excels in creating fluid, efficient, and robust
            digital experiences that resonate with users worldwide.
          </BoxContent>
        </InfoBox>
      </BoxContainer>

      <CenteredBoxContainer>
        <InfoBox style={{ flex: "1 1 100%", maxWidth: "400px" }}>
          <BoxTitle variant="h6">Grasping the future in cloud</BoxTitle>
          <BoxContent>
            With our expertise in maintaining smooth cloud infrastructure, we
            ensure your projects are not only visionary but also sustainable and
            scalable.
          </BoxContent>
        </InfoBox>
      </CenteredBoxContainer>
    </MissionContainer>
  );
};

export default MissionStatement;
