import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Container for the benefits section
const BenefitsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(9),
  textAlign: "center",
  marginBottom: 9,
}));

// Title for the benefits section
const BenefitsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  width: "70%",
  margin: "0 auto",
  fontSize: "1.8rem",
  color: "#4C98FD",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem", // Adjust font size for small screens
    width: "90%", // Make it wider on small screens
  },
}));

// Container for the boxes
const BenefitsBoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

// Individual box styling
const BenefitsInfoBox = styled(Box)(({ theme }) => ({
  width: "200px",
  minHeight: "250px",
  borderRadius: "12px 12px 40px 12px",
  padding: theme.spacing(4),
  borderTop: "4px solid #4C98FD",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: `5px 5px 15px rgba(76, 152, 253, 0.3)`,
  justifyContent: "space-between",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: `10px 10px 20px rgba(76, 152, 253, 0.5)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%", // Adjust width for small screens
    maxWidth: "300px", // Set a maximum width
  },
}));

// Title for each box
const BenefitsBoxTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  fontSize: "1.2rem",
  color: "#4C98FD",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem", // Adjust font size for small screens
  },
}));

// Content for each box
const BenefitsBoxContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
  lineHeight: 1.4,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem", // Adjust font size for small screens
  },
}));

const BenefitsSection = () => {
  return (
    <BenefitsContainer>
      <BenefitsTitle variant="h5">
        Major benefits from using Bhavani web application development services
      </BenefitsTitle>

      <BenefitsBoxContainer>
        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">Trust</BenefitsBoxTitle>
          <BenefitsBoxContent>
            Use our expertise to create secure, reliable, and intuitive web
            applications that prioritize data privacy and high performance.
          </BenefitsBoxContent>
        </BenefitsInfoBox>

        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">Conversions</BenefitsBoxTitle>
          <BenefitsBoxContent>
            Through our modern designs, you will improve engagement and
            conversion rates. Our web applications load fast and are very easy
            to use, respecting modern user expectations.
          </BenefitsBoxContent>
        </BenefitsInfoBox>

        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">Better costs</BenefitsBoxTitle>
          <BenefitsBoxContent>
            Bhavani web development processes propose and implement IT
            architectures that help you reduce costs. Our web applications are a
            smart investment for all businesses, big or small.
          </BenefitsBoxContent>
        </BenefitsInfoBox>
      </BenefitsBoxContainer>
    </BenefitsContainer>
  );
};

export default BenefitsSection;
