import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faDollarSign, faHandshake, faWrench } from "@fortawesome/free-solid-svg-icons"; // Import icons

// Container for the main section
const CollectionContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

// Title of the section
const CollectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(2),
  textAlign: "center",
  textTransform: "uppercase",
  color: "#4C98FD",
}));

// Subtitle for the collection
const CollectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  lineHeight: 1.2,
  textAlign: "center",
  marginBottom: theme.spacing(4),
  width: "40%",
  fontWeight: 700,
  margin: 10,
  [theme.breakpoints.down('md')]: {
    fontSize: "1.8rem",
    width: "60%",
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.6rem",
    width: "80%",
  },
}));

// Container for the service boxes
const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  flexWrap: "wrap",
  gap: theme.spacing(3),
  marginTop: 20,
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

// Individual service box
const ServiceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(3),
  backgroundColor: '#EBFFF7', // Set background color to #EBFFF7
  borderRadius: theme.shape.borderRadius,
  width: "280px",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: theme.shadows[6],
  },
  [theme.breakpoints.down('sm')]: {
    width: "200px",
    padding: theme.spacing(2),
  },
}));

// Text styles for service box titles and descriptions
const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  marginBottom: theme.spacing(1),
  textAlign: "center",
  color: '#2A78BE',
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.3rem",
  },
}));

const ServiceDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  textAlign: "center",
  color: theme.palette.grey[500], // Light gray color for descriptions
  [theme.breakpoints.down('sm')]: {
    fontSize: "0.9rem",
  },
}));

// Icon styles
const ServiceIcon = styled(Box)(({ theme }) => ({
  fontSize: "3rem", // You can adjust the size as needed
  marginBottom: theme.spacing(1),
  color: "#2A78BE",
  [theme.breakpoints.down('sm')]: {
    fontSize: "2.5rem",
  },
}));

const PremadeCollection = () => {
  return (
    <CollectionContainer>
      <CollectionTitle>The Collection</CollectionTitle>
      <CollectionSubtitle>
        Save time and money with Bhavani International
      </CollectionSubtitle>
      <Typography
        variant="h6"
        align="center"
        paragraph
        sx={{
          width: { xs: "80vw", sm: "60vw", md: "40vw" }, // Responsive width
          fontWeight: 500,
          color: (theme) => theme.palette.grey[500],
          my: 2,
        }} // Light gray color
      >
        Launch your websites fast and effortlessly with Experts
      </Typography>
      <ServicesContainer>
        <ServiceBox>
          <ServiceIcon>
            <FontAwesomeIcon icon={faDollarSign} /> {/* Font Awesome Dollar Icon */}
          </ServiceIcon>
          <ServiceTitle>Secure Website</ServiceTitle>
          <ServiceDescription>All websites are Secure</ServiceDescription>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon>
            <FontAwesomeIcon icon={faHandshake} /> {/* Font Awesome Handshake Icon */}
          </ServiceIcon>
          <ServiceTitle>24/7 Email Support</ServiceTitle>
          <ServiceDescription>Email support for a lifetime</ServiceDescription>
        </ServiceBox>
        <ServiceBox>
          <ServiceIcon>
            <FontAwesomeIcon icon={faWrench} /> {/* Font Awesome Wrench Icon */}
          </ServiceIcon>
          <ServiceTitle>Tech Support</ServiceTitle>
          <ServiceDescription>1 Month of tech support</ServiceDescription>
        </ServiceBox>
      </ServicesContainer>
    </CollectionContainer>
  );
};

export default PremadeCollection;
