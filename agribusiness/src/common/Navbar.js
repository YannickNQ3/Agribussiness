import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from '@mui/icons-material/Storefront';
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo-4.png";
import CustomButton from "./CustomButton";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {

  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <NavbarContainer sx={{justifyContent: "center"}}>
          <NavbarLogo style={{ display: "block"}} src={logoImg} alt="Agri" />
        </NavbarContainer>
        {["Inicio", "Nosotros", "Servicios", "Tienda", "Contacto"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <Link to={`/${text}`} style={{ textDecoration: "none", color: "#000" }}>
                <ListItemButton>
                  <ListItemIcon>
                    {index === 0 && <HomeIcon />}
                    {index === 1 && <ListAltIcon />}
                    {index === 2 && <MiscellaneousServicesIcon />}
                    {index === 3 && <StorefrontIcon />}
                    {index === 4 && <ContactsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />

                </ListItemButton>
              </Link>
            </ListItem>
          )
        )}
      </List>

    </Box>
  )

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#1A4A4A",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#5bce39",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    background: "#fff",
    justifyContent: "space-between",
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    height: "45px",
    marginTop: "-10px",
    display: "block",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return <NavbarContainer className="fixed-top">
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2.5rem" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
        <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
        <NavbarLogo src={logoImg} alt="Agri" />
      </Box>
      <NavbarLinksBox>
        <Link to="/Inicio" style={{ textDecoration: "none" }}>
          <NavLink variant="body2">Inicio</NavLink>
        </Link>
        <Link to="/Nosotros" style={{ textDecoration: "none" }}>
          <NavLink variant="body2">Nosotros</NavLink>
        </Link>
        <Link to="/Servicios" style={{ textDecoration: "none" }}>
          <NavLink variant="body2">Servicios</NavLink>
        </Link>
        <Link to="/Tienda" style={{ textDecoration: "none" }}>
          <NavLink variant="body2">Tienda</NavLink>
        </Link>
        <Link to="/Contacto" style={{ textDecoration: "none" }}>
          <NavLink variant="body2">Contacto</NavLink>
        </Link>
      </NavbarLinksBox>
    </Box>

    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
      <Link to="/Login" style={{ textDecoration: "none" }}>
        <NavLink to="/login" variant="body2">Iniciar Sesión</NavLink>
      </Link>
      <Link to="/Register" style={{ textDecoration: "none" }}>
        <CustomButton backgroundColor="#04141c" color="#fff" buttonText="Registrarse" />
      </Link>
    </Box>
  </NavbarContainer>;
};

export default Navbar;
