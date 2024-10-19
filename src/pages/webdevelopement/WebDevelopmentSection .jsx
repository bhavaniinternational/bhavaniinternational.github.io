import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import BenefitsSection from "../../components/web-development/BenefitsSection";
import FastWebDevComponent from "../../components/web-development/FastWebDevComponent";
import web from "../../utils/web.png"; // Imported web image

const Container = styled(Box)(({ theme }) => ({
  textAlign: "center",
  minHeight: "100vh",
  paddingTop: "100px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(15), // Adjust padding for small screens
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem",
  color: "#4C98FD",
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem", // Responsive font size
  },
}));

const Content = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#555",
  maxWidth: "600px", // Use maxWidth instead of width
  margin: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem", // Responsive font size
    padding: theme.spacing(2), // Adjust padding for small screens
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
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2), // Adjust padding for small screens
  },
}));

const SecondaryText = styled(Typography)(({ theme }) => ({
  maxWidth: "60%", // Use maxWidth instead of width
  margin: "auto",
  textAlign: "center",
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%", // Adjust maxWidth for small screens
    fontSize: "12px", // Responsive font size
  },
}));

const AdditionalTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "#333",
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.2rem", // Responsive font size
  },
}));

const AdditionalContent = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  lineHeight: 1.7,
  color: "#555",
  maxWidth: "60%", // Use maxWidth instead of width
  margin: "auto",
  paddingTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%", // Adjust maxWidth for small screens
    fontSize: "0.9rem", // Responsive font size
    padding: theme.spacing(2), // Adjust padding for small screens
  },
}));

const WebDevelopmentSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Box sx={{ paddingX: { xs: 5, md: 10 } }}>
        <Title>Discover Bhavani Web Application Development Services</Title>
        <Box display="flex" justifyContent="center" marginBottom={3}>
          <img
            src={web}
            alt="Web Development Illustration"
            width="300"
            height="300"
            style={{ borderRadius: "12px" }}
          />
        </Box>
        <Content>
          Transform or build your online business with our innovative web
          application development services. Our experienced specialists will
          deliver stunning services that empower your business to thrive online.
          With years of experience working with firms in the European Union, The
          United Kingdom, The United States, we specialize in creating dynamic
          and secure web applications perfect for specific business necessities.
        </Content>

        <SecondaryContent>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Why should you choose Bhavani for your project?
          </Typography>
          <SecondaryText variant="body1" paragraph>
            We have the technical capabilities and IT expertise to ensure
            personalized solutions to different types of digital projects (web
            and mobile). Our team will work closely with you to understand your
            vision and deliver fully customized software solutions that align
            with long term plans.
          </SecondaryText>
          <SecondaryText variant="body1" paragraph>
            Web security is important these days, especially when there are so
            many external threats out there. We implement heightened security
            protocols to protect your digital assets and ensure that all
            applications are safe from external threats. Users will use your
            services without reservations knowing that you have in place
            security protocols to protect their data.
          </SecondaryText>
        </SecondaryContent>

        <AdditionalTitle>We know web flexibility</AdditionalTitle>
        <AdditionalContent>
          Bhavani understands flexibility is key to success in an ever-changing
          digital landscape. Your business will grow and thus you need scalable
          solutions to accommodate growing needs without compromising overall
          performance. User experience is key to your success. We make sure
          users will enjoy a smooth and intuitive experience, thus attracting
          and retaining customers for a long time. Our aim is to create
          user-centric designs that maintain visitors engaged.
        </AdditionalContent>
      </Box>

      {/* Major Benefits Section */}
      <BenefitsSection />
      <FastWebDevComponent />
    </Container>
  );
};

export default WebDevelopmentSection;
