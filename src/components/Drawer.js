import React, { useState, useEffect, useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MailIcon from "@mui/icons-material/Mail";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import AddBoxIcon from "@mui/icons-material/AddBox";
import { makeStyles } from "@mui/styles";
import {
  SwipeableDrawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Button
} from "@mui/material";
import green from "@mui/material/colors/green";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation} from "react-router-dom";
import { AuthContext } from "../components/Authentication/AuthProvider";

import "../App.css";

const useStyles = makeStyles({
  drawer: {
    position: "absolute",
    width: "230px",
    height: "100%",
    backgroundColor: green[900],
    color: "white",
  },
});



const Drawer = () => {

  const { user,logout } = useContext(AuthContext);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/explorespecies") {
      setActiveTab("Explore Species");
    } else if (location.pathname === "/addspecies") {
      setActiveTab("Add New Species");
    } else if (location.pathname === "/contact") {
      setActiveTab("Contact Us");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  const handleMenuClick = () => {
    setOpen(true);
  };

  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon style={{ color: green[50] }} />,
      path: "/",
    },
     {
      text: "Explore Species",
      icon: <TravelExploreIcon style={{ color: green[50] }} />,
      path: "/explorespecies",
    },
    {
      text: "Add New Species",
      icon: <AddBoxIcon style={{ color: green[50] }} />,
      path: "/addspecies",
    },
    {
      text: "Contact Us",
      icon: <MailIcon style={{ color: green[50] }} />,
      path: "/contact",
    },
    {
      text: "About",
      icon: <InfoIcon style={{ color: green[50] }} />,
      path: "/about",
    },
  ];


  return (
    <>
      {/*<Box sx={{ flexGrow: 1 }}>*/}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => handleMenuClick()}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" }, ml: -1 }}
          >
            Medicinal & Aromatic Plants of Sikkim
          </Typography>
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", md: "none" }, ml: -1 }}
          >
            MPIS Sikkim
          </Typography>
          {user && user.emailVerified ? (
            <>
            <Box sx={{display:{xs:"none",sm:"block"}}}>
            <Typography
              variant="body1"
              sx={{ fontSize: 14 }}
            >
              Hello, {user && user.email} | {"  "}
            </Typography>
            </Box>
            <Button 
              color="inherit"
              onClick={logout}
            >
              Logout
            </Button>
          </>
          ):(  
          <>
          <Button
            color="inherit"
          >
            <Link
              to="/login"
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              LOGIN
            </Link>
          </Button>
          </>
          )}
        </Toolbar>
      </AppBar>
      <MUIDrawer
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        variant="temporary"
        color="primary"
      >
        <List className={classes.drawer}>
          <Box height={170} sx={{ flexGrow: 1, mt: -1 ,width:"100%"}}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mpis-mini.appspot.com/o/logo.jpg?alt=media&token=a8def575-176c-49e0-bed6-5b897428cc62"
              alt="mpis sikkim logo"
              width="100%"
              height="100%"
            />
          </Box>
          <Divider variant="middle" />
          {itemsList.map((item, index) => {
            const { text, icon, path } = item;
            return (
              <Link
                to={path}
                style={{ textDecoration: "inherit", color: "inherit" }}
                onClick={() => {setOpen(false);window.scroll(0,0)}}
              >
                <p
                  className={`${activeTab === text ? "active" : ""}`}
                  onClick={() => setActiveTab(text)}
                >
                  <ListItem button key={text}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                    <ListItemText primary={text} />
                  </ListItem>
                </p>
              </Link>
            );
          })}
        </List>
        {user && user.emailVerified ? (
          <Typography variant="body1" sx={{fontSize:12,m:"auto",display:{xs:"block",sm:"none"}}}>{user.email}</Typography>
          ):("")}
      </MUIDrawer>
    </>
  );
};

export default Drawer;
