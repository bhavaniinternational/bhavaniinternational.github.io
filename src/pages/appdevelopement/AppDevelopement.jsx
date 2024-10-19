import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import AppAdvantage from "../../components/app-developement/AppAdvantage";
import ContactusApp from "../../components/app-developement/ContactusApp";
import web from "../../utils/mobile.jpeg"; // Imported web image

const Container = styled(Box)(({ theme }) => ({
  textAlign: "center",
  minHeight: "100vh",
  paddingTop: "100px",
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem",
  color: "#4C98FD",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem", // Smaller font for mobile
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#555",
  width: "600px", // Default width
  margin: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    width: "90%", // Adjust width for tablets and below
  },
}));

const SecondaryContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  padding: theme.spacing(3),
  background: "linear-gradient(to left, #A5C4F3, #597ABC)",
  boxShadow: theme.shadows[2],
  borderRadius: "80px 12px 100px 22px",
  textAlign: "left",
  paddingTop: 50,
  paddingBottom: 50,
  color: "white",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
    borderRadius: "50px 10px 60px 18px", // Adjusted border radius for smaller screens
  },
}));

const SecondaryText = styled(Typography)(({ theme }) => ({
  width: "60%", // Default width
  margin: "auto",
  textAlign: "center",
  fontSize: "14px",
  [theme.breakpoints.down("md")]: {
    width: "80%", // Adjust width for tablets and below
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px", // Smaller font for mobile
  },
}));

const AdditionalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#333",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem", // Smaller font for mobile
  },
}));

const AdditionalContent = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#555",
  width: "60%", // Default width
  margin: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    width: "90%", // Adjust width for tablets and below
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem", // Smaller font for mobile
  },
}));

const AppDevelopement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Box sx={{ paddingX: { xs: 5, md: 10 } }}>
        <Title>Rethink your mobile presence with Native app development</Title>
        <Box display="flex" justifyContent="center" marginBottom={3}>
          <img
            src={web}
            alt="Web Development Illustration"
            width="300" // Set the desired width
            height="300" // Set the desired height
            style={{ borderRadius: "12px" }} // Optional: Add border radius for rounded corners
          />
        </Box>
        <Content>
          Our Native mobile app development services can help you build faster
          and more efficient applications with a sublime user experience. Put
          our expertise to work and transform your business into a mobile
          powerhouse, with native-live fluidity on both Android and iOS
          platforms. We leverage the full potential of Native to your benefit.
          Our team will use Native to create visually stunning applications that
          run perfectly for both Android and iOS. If you are ready to improve
          your performance on these two ecosystems, opt without reservations for
          Native apps.
        </Content>

        <SecondaryContent>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Why should you choose React Native for mobile apps?
          </Typography>
          <SecondaryText variant="body1" paragraph>
            Let’s start with the basics: React Native is Google’s UI toolkit for
            developers who want to create amazing applications for mobile, web,
            and desktop from a single codebase. We can use a wide range of fully
            customizable widgets in React Native to create native interfaces,
            appropriate to your needs. With the newly designed app, you can
            ensure a rich and smooth user experience.
          </SecondaryText>
        </SecondaryContent>
      </Box>

      <AppAdvantage />
      <Box sx={{ paddingX: { xs: 5, md: 10 } }}>
        <AdditionalTitle>
          Enhance your digital business with Bhavani App expertise
        </AdditionalTitle>
        <AdditionalContent>
          Our team delivers mobile app development for your digital projects to
          come alive. We create cross-platform apps that help you get FASTER to
          market and with FEWER development costs. We employ skilled Flutter
          specialists who tailor applications that meet your business needs and
          exceed market standards in terms of design, performance, and
          functionality. Join an exclusive community of happy clients from
          different industries.
        </AdditionalContent>
      </Box>
      <ContactusApp />
    </Container>
  );
};

export default AppDevelopement;
