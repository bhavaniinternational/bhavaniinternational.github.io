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
  width: "250px",
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
}));

// Title for each box
const BenefitsBoxTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  fontSize: "1.2rem",
  color: "#4C98FD",
}));

// Content for each box
const BenefitsBoxContent = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "0.9rem",
  lineHeight: 1.4,
}));

const AppAdvantage = () => {
  return (
    <BenefitsContainer>
      <BenefitsTitle variant="h5">
        What are the advantages of using Native apps?
      </BenefitsTitle>

      <BenefitsBoxContainer>
        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">
            Cross-platform customizable development.
          </BenefitsBoxTitle>
          <BenefitsBoxContent>
            We can write code and then deploy it on Android and iOS platforms,
            thus reducing app development time and costs. Clients benefit from
            exposure and activity in the major mobile OS.
          </BenefitsBoxContent>
        </BenefitsInfoBox>

        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">
            Fast development, quick release.
          </BenefitsBoxTitle>
          <BenefitsBoxContent>
            Get your business up and running faster than planned. Through
            Flutter's swift development process, your app is ready to go. Our
            specialists will build UI-s, add various features, and fix bugs
            faster than ever.
          </BenefitsBoxContent>
        </BenefitsInfoBox>

        <BenefitsInfoBox>
          <BenefitsBoxTitle variant="h6">
            Sublime user interface.
          </BenefitsBoxTitle>
          <BenefitsBoxContent>
            Bhavani can use Flutter to create beautiful apps with intuitive user
            interfaces. From navigation, icons, fonts, and scrolling options,
            your app will run smoothly on iOS and Android OS.
          </BenefitsBoxContent>
        </BenefitsInfoBox>
      </BenefitsBoxContainer>
    </BenefitsContainer>
  );
};

export default AppAdvantage;
