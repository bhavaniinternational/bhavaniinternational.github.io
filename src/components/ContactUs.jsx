import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, TextField, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import contactUsimg from "../utils/contactus.jpg";
import { baseurl } from "../config/apiconfig.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(4),
  marginLeft: 40,
  marginRight: 40,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    marginLeft: 10,
    marginRight: 10,
  },
}));

const FormContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  width: "80%",
  marginRight: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    marginRight: 0,
    width: "100%",
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem",
  marginBottom: theme.spacing(2),
  color: "#4C98FD",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const SectionParagraph = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: theme.spacing(4),
  margin: 0,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#2A78BE",
  color: "white",
  width: 150,
  "&:hover": {
    backgroundColor: "#1F5A8B",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width on small screens
  },
}));

const ImageIllustration = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  paddingTop: 100,
  [theme.breakpoints.down("md")]: {
    paddingTop: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

const NameEmailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiInputBase-root": {
    borderBottom: "2px solid #2A78BE",
  },
  marginBottom: theme.spacing(2), // Ensure proper spacing
}));

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, title, message } = formData;
    if (!name || !email || !title || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${baseurl}/api/send-email`, formData);
      if (response.data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", title: "", message: "" });
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ContactUsContainer id="contact">
        <FormContainer>
          <SectionTitle>Contact Us</SectionTitle>
          <SectionParagraph>
            Get in touch and let us know how we can help.
          </SectionParagraph>
          <form onSubmit={handleSubmit}>
            <NameEmailContainer>
              <CustomTextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
                sx={{ marginRight: { sm: 1 }, marginBottom: { xs: 2, sm: 0 } }}
              />
              <CustomTextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                fullWidth
                margin="normal"
              />
            </NameEmailContainer>
            <CustomTextField
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <CustomTextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              multiline
              rows={4}
            />
            <Box display="flex" justifyContent="flex-end">
              <StyledButton type="submit" disabled={loading}>
                {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
              </StyledButton>
            </Box>
          </form>
        </FormContainer>
        <ImageIllustration>
          <img
            src={contactUsimg}
            alt="Contact Us"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
          />
        </ImageIllustration>
      </ContactUsContainer>
      <ToastContainer />
    </>
  );
};

export default ContactUs;
