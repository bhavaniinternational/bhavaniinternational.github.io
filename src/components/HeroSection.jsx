import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import heroImg from "../utils/hero-image-6.png"; // Import the hero image

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${heroImg})`, // Use the imported image for the background
  backgroundSize: "cover", // Cover the entire container
  backgroundPosition: "center", // Center the image
  minHeight: "90vh", // Ensure it takes up at least 90% of the viewport height
  width: "98.7vw", // Set width to 100vw to prevent horizontal scrolling
  height: "100%", // Set height to 100% to cover the full height of the parent
  padding: theme.spacing(4), // Add padding for spacing
  color: "white", // Set text color to white for better visibility
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Align content to the left
  justifyContent: "center",
  borderRadius: "0 0 0 250px", // Set border radius only for the bottom left corner
  position: "relative", // Ensure the content can be positioned over the image
  overflow: "hidden", // Prevent overflow of child elements

  [theme.breakpoints.down("sm")]: {
    borderRadius: "0", // Remove border radius on smaller screens
    padding: theme.spacing(2), // Reduce padding
    minHeight: "70vh", // Adjust height for small screens
    width: "100vw", // Ensure no horizontal scrolling
    marginTop: 100,
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  width: "700px", // Set a fixed width for the content box
  maxWidth: "90%", // Ensure it doesn't exceed the viewport on smaller screens
  marginLeft: theme.spacing(4), // Add margin to push content away from the left edge
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Make it take full width on small screens
    marginLeft: theme.spacing(1), // Adjust margin
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.7)", // Add text shadow for better readability

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Scale down font size for small screens
  },
}));

const ShadowedTypography = styled(Typography)(({ theme }) => ({
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)", // Add a more pronounced shadow effect

  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Scale down font size for small screens
  },
}));

const HeroSection = () => {
  return (
    <HeroContainer>
      <ContentBox>
        <StyledTypography variant="h4" fontWeight={700}>
          BHAVANI INTERNATIONAL
        </StyledTypography>
        <Box display="flex" flexDirection="column">
          <ShadowedTypography variant="h6" fontWeight={400}>
            Software and
          </ShadowedTypography>
          <ShadowedTypography variant="h6" fontWeight={400}>
            Development Company
          </ShadowedTypography>
        </Box>
        <StyledTypography variant="body1" mt={2}>
          We are a team of enthusiastic individuals boasting a robust IT
          background and expertise. As a committed web development firm with
          extensive experience, Bhavani breathes life into your ideas by
          crafting reliable software and web solutions. Provide us with the
          details, and we'll discover the optimal solutions for your digital
          needs.
        </StyledTypography>
      </ContentBox>
    </HeroContainer>
  );
};

export default HeroSection;
