/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LogoPhoto from "../../Assets/KG Logo.jpg";
// import "./HeaderDrawer.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../Pages/ThemeContext/ThemeContext";

const drawerWidth = 240;
const navItems = ["Translation", "Transcription", "Subtitling"];

function HeaderDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { Theme, ChangeTheme } = useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    //Phone Preview
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 1 }}>
        Khaled Ghonim for Translation Services
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    //Phone Preview

    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to={"/"}>
            <img src={LogoPhoto} alt="Logo Photo" className="LogoPhoto" />
          </NavLink>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 0.5, display: { xs: "none", sm: "block" } }}
          >
            <NavLink className={"LogoName"} to={"/"}>
              Khaled Ghonim for Translation Services
            </NavLink>
          </Typography>

          <div
            className="DarkLightMode"
            onChange={() => {
              ChangeTheme(Theme === "Dark" ? "Light" : "Dark");
            }}
          >
            <div className="toggleWrapper">
              <input type="checkbox" className="dn" id="dn" />
              <label htmlFor="dn" className="toggle">
                <span className="toggle__handler">
                  <span className="crater crater--1" />
                  <span className="crater crater--2" />
                  <span className="crater crater--3" />
                </span>
                <span className="star star--1" />
                <span className="star star--2" />
                <span className="star star--3" />
                <span className="star star--4" />
                <span className="star star--5" />
                <span className="star star--6" />
              </label>
            </div>
          </div>

          <Box
            //Laptop Preview

            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          className="Drawer"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default HeaderDrawer;
