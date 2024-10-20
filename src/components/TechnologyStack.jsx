import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import reactLogo from "../utils/react.png"; // Replace with the actual path of your images
import reactNativeLogo from "../utils/react.png"; // Replace with the actual path of your images
import javaLogo from "../utils/java.png"; // Replace with the actual path of your images
import nodeJsLogo from "../utils/nodejs.png"; // Replace with the actual path of your images
import dockerLogo from "../utils/docker.png"; // Replace with the actual path of your images
import postgresLogo from "../utils/postgres.png"; // Replace with the actual path of your images
import azureLogo from "../utils/azure.png"; // Replace with the actual path of your images
import awsLogo from "../utils/aws.png"; // Replace with the actual path of your images

// Container for the technology stack section
const TechnologyContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4), // Padding for spacing
  marginTop: theme.spacing(3), // Spacing above the section
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center the content horizontally
  justifyContent: "center", // Center the content vertically
  backgroundColor: theme.palette.background.paper, // Background color for the container
  borderRadius: theme.shape.borderRadius, // Rounded corners
}));

// Title for the technology stack section
const StackTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem", // Larger font size for the title
  marginBottom: theme.spacing(2), // Spacing below the title
  textAlign: "center", // Center align the title text
}));

// Text content about customer security
const SecurityText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem", // Regular text size
  lineHeight: 1.6, // Line height for better readability
  textAlign: "center", // Center align the text
  marginBottom: theme.spacing(3), // Spacing below the text
  width: "50vw", // Adjusted width
  fontWeight: 600,
  color: "gray",
  [theme.breakpoints.down("sm")]: {
    width: "70vw", // Decrease font size further on small screens
  },
}));

// Container for the technology items displaying logos and names
const ChipsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap", // Allow items to wrap to the next line
  justifyContent: "center", // Center items horizontally
  gap: theme.spacing(2), // Space between items
  marginTop: theme.spacing(2), // Spacing above the items
}));

// Container for each technology with image and name
const TechItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Align items vertically centered
  gap: theme.spacing(1), // Space between logo and name
  padding: theme.spacing(2), // Padding inside the box
  backgroundColor: theme.palette.background.default, // Background color
  borderRadius: theme.shape.borderRadius, // Rounded corners
  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)", // Light shadow effect
  transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition for hover effects
  "&:hover": {
    transform: "translateY(-5px)", // Raise the item on hover
    boxShadow: theme.shadows[3], // Enhance shadow on hover
  },
  width: "130px", // Fixed width for all items
}));

const TechnologyStack = () => {
  const techData = [
    { name: "React", logo: reactLogo },
    { name: "React Native", logo: reactNativeLogo },
    { name: "Java", logo: javaLogo },
    { name: "Node.js", logo: nodeJsLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "Postgres", logo: postgresLogo },
    { name: "Azure", logo: azureLogo },
    { name: "AWS", logo: awsLogo },
  ];

  return (
    <TechnologyContainer id="technologies">
      <StackTitle>Our Technology Stack</StackTitle>
      <SecurityText>
        We are concerned about the security of our customers, that's why we
        always keep updating and use the best technologies in our product.
      </SecurityText>
      <ChipsContainer>
        {techData.map((tech, index) => (
          <TechItemContainer key={index}>
            <img
              src={tech.logo}
              alt={tech.name}
              style={{ width: "50px", height: "50px" }} // Adjusted size for better visibility
            />
            <Typography variant="body1" style={{ textAlign: "center" }}>
              {tech.name}
            </Typography>
          </TechItemContainer>
        ))}
      </ChipsContainer>
    </TechnologyContainer>
  );
};

export default TechnologyStack;
