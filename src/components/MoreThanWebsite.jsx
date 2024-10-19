import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faSearch,
  faMobileAlt,
  faFileAlt,
  faChartLine,
  faLifeRing,
} from "@fortawesome/free-solid-svg-icons";

// Container for the main section
const MoreThanWebsiteContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

// Title of the section
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem",
  textAlign: "center",
  color: "#4C98FD",
  marginBottom: theme.spacing(2),
}));

// Paragraph text
const SectionParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  textAlign: "center",
  marginBottom: theme.spacing(4),
  width: "80%",
  color: theme.palette.grey[700],
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Adjust width for small screens
  },
}));

// Container for the info boxes using grid layout
const InfoBoxesContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // Three columns for large screens
  gap: theme.spacing(2),
  width: "80%",
  marginTop: theme.spacing(2),
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)", // Two columns for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "repeat(1, 1fr)", // One column for small screens
    width: "100%", // Full width for small screens
  },
}));

// Individual info box
const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  justifyContent: "start",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Reduce padding on small screens
  },
}));

// Text styles for info box titles and descriptions
const InfoTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(1),
  paddingTop: 10,
}));

const InfoDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.grey[500],
}));

// Styled component for FontAwesome icons
const StyledIcon = styled(FontAwesomeIcon)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#00E68E",
}));

// Container for icon and title together
const IconTitleContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
}));

const MoreThanWebsite = () => {
  return (
    <MoreThanWebsiteContainer>
      <SectionTitle>Much more than just a website</SectionTitle>
      <SectionParagraph>
        We provide a complete suite of services to ensure your online presence
        is robust, secure, and tailored to your needs. Our focus is not just on
        building websites but creating an impactful online experience.
      </SectionParagraph>
      <InfoBoxesContainer>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faPaintBrush} />
            <InfoTitle>Custom Design</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Tailored designs that reflect your brand and vision.
          </InfoDescription>
        </InfoBox>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faSearch} />
            <InfoTitle>SEO Optimization</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Strategies to improve your visibility on search engines.
          </InfoDescription>
        </InfoBox>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faMobileAlt} />
            <InfoTitle>Responsive Layout</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Ensure your website looks great on all devices.
          </InfoDescription>
        </InfoBox>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faFileAlt} />
            <InfoTitle>Content Management</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Easy-to-use systems for updating your website content.
          </InfoDescription>
        </InfoBox>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faChartLine} />
            <InfoTitle>Analytics Integration</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Track your website's performance with integrated analytics.
          </InfoDescription>
        </InfoBox>
        <InfoBox>
          <IconTitleContainer>
            <StyledIcon icon={faLifeRing} />
            <InfoTitle>Ongoing Support</InfoTitle>
          </IconTitleContainer>
          <InfoDescription>
            Continuous support to keep your website running smoothly.
          </InfoDescription>
        </InfoBox>
      </InfoBoxesContainer>
    </MoreThanWebsiteContainer>
  );
};

export default MoreThanWebsite;
