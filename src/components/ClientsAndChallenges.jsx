import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import custoumer from "../utils/customers.png"; // Importing customer image
import target from "../utils/target.png"; // Importing target image

// Container for each section, centered horizontally
const ContentContainer = styled(Box)(({ theme }) => ({
  width: "30vw", // Adjust width for larger screens
  padding: theme.spacing(4), // Padding for spacing
  marginTop: theme.spacing(3), // Spacing between sections
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // Ensure the content starts from the left
  [theme.breakpoints.down("md")]: {
    width: "80vw", // Full width for medium and small screens
    padding: theme.spacing(2), // Less padding for smaller screens
  },
  [theme.breakpoints.down("sm")]: {
    width: "90vw", // Full width for small screens
    padding: theme.spacing(1), // Even less padding for very small screens
  },
}));

// Title container to hold the image and title
const TitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column", // Stack image above the title
  marginBottom: theme.spacing(2), // Space between the image+title and the text
}));

// Title for each section, aligned to the left
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.4rem", // Slightly larger font size for the title
  textAlign: "center", // Ensure the title is centered below the image
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem", // Adjust font size for small screens
  },
}));

// Text content for each section
const SectionText = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem", // Regular text size
  lineHeight: 1.6, // Line height for better readability
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem", // Adjust text size for small screens
  },
}));

const ClientsAndChallenges = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }} // Stack sections vertically on small screens, horizontally on larger screens
      alignItems="start" // Align both sections from the top
      justifyContent="center"
      mx={{ xs: 2, md: 0 }}
      gap={4}
    >
      {/* Section for Clients and Partners */}
      <ContentContainer>
        <TitleContainer>
          <img
            src={custoumer}
            alt="Customer Icon"
            style={{ width: 50, height: 50 }}
          />{" "}
          {/* Customer Image */}
          <SectionTitle>Clients and Partners</SectionTitle>
        </TitleContainer>
        <SectionText>
          Over the past few years, we've had the privilege of collaborating with
          clients from diverse sectors seeking web and app development software
          solutions. Even prospective clients have benefited from more than just
          straightforward answers.
          <br />
          Our goal is to assist, whether that means entering a collaboration or
          not. Our tech-savvy team is adept at devising solutions to problems
          using technology. At the end of the day, what clients truly seek is
          results.
        </SectionText>
      </ContentContainer>

      {/* Section for Ready for New Challenges */}
      <ContentContainer>
        <TitleContainer>
          <img
            src={target}
            alt="Target Icon"
            style={{ width: 50, height: 50 }}
          />{" "}
          {/* Target Image */}
          <SectionTitle>Ready for New Challenges</SectionTitle>
        </TitleContainer>
        <SectionText>
          Prepare to collaborate with experienced specialists. If you're looking
          to develop or enhance your network infrastructure, monitor and
          optimize your workflow with the latest technologies and intelligent
          solutions, let us know how we can assist you.
        </SectionText>
      </ContentContainer>
    </Box>
  );
};

export default ClientsAndChallenges;
