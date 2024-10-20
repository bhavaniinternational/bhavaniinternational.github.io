import CloseIcon from "@mui/icons-material/Close"; // Import Close icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer"; // Import Drawer
import logo from "../utils/transperent-logo.png";

const NavbarContainer = styled(AppBar)(({ theme }) => ({
  backgroundColor: "white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  boxShadow: "none",
  maxHeight: 100,
}));

const Logo = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const NavLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  color: "#000",
  fontWeight: 600,
  textTransform: "none",
  width: "100%",
  "&:hover": {
    color: "#2A78BE",
  },
}));

const Circle = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: -10,
  left: "50%",
  transform: "translateX(-50%)",
  width: 8,
  height: 8,
  backgroundColor: "#2A78BE",
  borderRadius: "50%",
}));

const DrawerNavLink = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  color: "#fff",
  fontWeight: 600,
  textTransform: "none",
  display: "block",
  width: "100%",
  borderRadius: "4px",
  padding: "12px 16px",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#2A78BE",
    transform: "scale(1.05)",
  },
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.85)",
  color: "#fff",
  padding: "20px",
}));

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state
  const isMobile = useMediaQuery("(max-width:600px)");
  let navigate = useNavigate();

  const handleMouseEnter = (event) => {
    if (event.currentTarget.textContent.includes("Services")) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    handleMenuClose();
    setDrawerOpen(false); // Close drawer after clicking a link
  };

  useEffect(() => {
    const handleMouseLeaveWindow = (e) => {
      if (
        e.clientY <= 0 ||
        e.clientX <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        handleMenuClose();
      }
    };

    window.addEventListener("mouseleave", handleMouseLeaveWindow);

    return () => {
      window.removeEventListener("mouseleave", handleMouseLeaveWindow);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderNavLinks = () => (
    <>
      <Link to="/">
        <NavLink
          component="span"
          onClick={() => handleNavClick("Home")}
          sx={activeTab === "Home" ? { color: "#2A78BE", px: 4 } : { px: 4 }}
        >
          Home
          {activeTab === "Home" && <Circle />}
        </NavLink>
      </Link>

      <Box sx={{ position: "relative" }} onMouseEnter={handleMouseEnter}>
        <NavLink
          component="span"
          sx={
            activeTab === "Services" ? { color: "#2A78BE", px: 4 } : { px: 4 }
          }
        >
          Services
          <ArrowDropDownIcon fontSize="small" />
          {activeTab === "Services" && <Circle />}
        </NavLink>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          MenuListProps={{
            onMouseEnter: () => setAnchorEl(anchorEl),
            onMouseLeave: handleMenuClose,
          }}
        >
          <MenuItem
            onClick={() => {
              handleNavClick("Web Development");
              navigate("/web-development");
            }}
          >
            Web Development
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleNavClick("Mobile App Development");
              navigate("/app-development");
            }}
          >
            Mobile App Development
          </MenuItem>
        </Menu>
      </Box>

      <NavLink
        component="span"
        onClick={() => {
          handleNavClick("Technologies");
          navigate("/");
          setTimeout(() => {
            scrollToSection("technologies");
          }, 100);
        }}
        sx={
          activeTab === "Technologies" ? { color: "#2A78BE", px: 4 } : { px: 4 }
        }
      >
        Technologies
        {activeTab === "Technologies" && <Circle />}
      </NavLink>

      <NavLink
        component="span"
        onClick={() => {
          handleNavClick("Contact");
          navigate("/");
          setTimeout(() => {
            scrollToSection("contact");
          }, 100);
        }}
        sx={activeTab === "Contact" ? { color: "#2A78BE", px: 4 } : { px: 4 }}
      >
        Contact
        {activeTab === "Contact" && <Circle />}
      </NavLink>
    </>
  );

  const renderNavLinksSmallDevice = () => (
    <DrawerContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Vertically center the text
        textAlign: "center", // Center the text horizontally
      }}
    >
      {[
        "Home",
        "Contact",
        "Technologies",
        "Web Development",
        "Mobile App Development",
      ].map((item) => (
        <DrawerNavLink
          key={item}
          sx={{
            color: "white",
            display: "block",
            padding: "12px 16px",
            borderRadius: "8px",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.3)",
            },
          }}
          component="span"
          onClick={() => {
            handleNavClick(item);
            if (item === "Home") {
              navigate("/"); // Redirect to home
            } else if (item === "Contact") {
              navigate("/");
              setTimeout(() => {
                scrollToSection("contact"); // Smooth scroll to contact section
              }, 100);
            } else if (item === "Technologies") {
              navigate("/");
              setTimeout(() => {
                scrollToSection("technologies");
              }, 100);
            } else if (item == "Mobile App Development") {
              navigate("/app-development");
            } else {
              navigate(`/${item.replace(" ", "-").toLowerCase()}`); // Redirect to other pages
            }
          }}
        >
          {item}
        </DrawerNavLink>
      ))}
    </DrawerContainer>
  );
  return (
    <NavbarContainer>
      <Toolbar>
        <Logo onClick={() => navigate("/")}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "90px", height: "auto" }}
          />
        </Logo>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ color: drawerOpen ? "white" : "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "100%", // Full-width drawer
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  color: "white",
                },
              }}
            >
              <IconButton
                edge="end"
                aria-label="close"
                onClick={() => setDrawerOpen(false)}
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 20,
                  color: "white",
                }}
              >
                <CloseIcon />
              </IconButton>
              <Box>{renderNavLinksSmallDevice()}</Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: "flex" }}>{renderNavLinks()}</Box>
        )}
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;
