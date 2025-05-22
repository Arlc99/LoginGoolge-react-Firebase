import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assets/logo.png"; // Asegúrate de tener la imagen en la ruta correcta
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
  Box,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import StoreIcon from "@mui/icons-material/Store";

const Navbar = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#0b880f", // Cambia el color "secondary o fondo" a verde
        contrastText: "#ffffff", //color del texto en el boton
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: "Inicio", href: "/", icon: <HomeIcon /> },
    { text: "Servicios", href: "#services", icon: <DesignServicesIcon /> },
    { text: "Acerca", href: "#portfolio", icon: <InfoIcon /> },
    { text: "Contacto", href: "#contact", icon: <ContactMailIcon /> },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.01)",
            color: "#1E1E1E",
            boxShadow: "none",
            borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <Toolbar sx={{ minHeight: "70px" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: "1px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{ width: "80px", margin: "5px" }}
              />
            </Typography>

            {isMobile ? (
              <IconButton
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{
                  padding: "12px",
                  backgroundColor: "rgba(11, 136, 15, 0.1)", // Fondo verde claro transparente
                  borderRadius: "5px",
                  color: "#0b880f", // Icono verde oscuro
                  "&:hover": {
                    backgroundColor: "#0b880f", // Fondo verde oscuro al hover
                    color: "#FFFFFF", // Icono blanco al hover
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, }}>
                <Box sx={{ display: "flex", }}>
                  {menuItems.map((item) => (
                    <Tooltip key={item.text} title={item.text}>
                      <IconButton
                        color="inherit"
                        href={item.href}
                        sx={{
                          mx: 0.5,
                          backgroundColor: "#E8EDE4",
                          "&:hover": {
                            backgroundColor: "#0b880f",
                          },
                        }}
                      >
                        {item.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>

                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    mx: 1,
                    backgroundColor: "#E8EDE4",

                    height: "30px",
                  }}
                />

                <Button
                  component={RouterLink}
                  to="/login"
                  variant="outlined"
                  color="inherit"
                  startIcon={<LoginIcon />}
                  sx={{
                    fontWeight: 500,
                    width: "150px",
                    fontSize: "10px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Iniciar Sesión
                </Button>

                <Button
                  component={RouterLink}
                  to="/Register"
                  variant="contained"
                  color="secondary"
                  startIcon={<HowToRegIcon sx={{ color: "#FFFFFF" }} />}
                  sx={{
                    fontWeight: 500,
                    width: "150px",
                    fontSize: "10px",
                    ml: 1,
                  }}
                >
                  Registrarse
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            "& .MuiDrawer-paper": {
              width: 280,
              background: "linear-gradient(to left, rgba(232, 236, 230, 0.9), rgba(242, 245, 240, 0.9))" ,
              color: "#1E1E1E",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px",
              borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <Typography variant="h6" sx={{ padding: "8px" }}>
              Menú
            </Typography>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{
                 padding: "12px",
                  backgroundColor: "rgba(11, 136, 15, 0.1)", // Fondo verde claro transparente
                  borderRadius: "5px",
                  color: "#0b880f", // Icono verde oscuro
                  "&:hover": {
                    backgroundColor: "#0b880f", // Fondo verde oscuro al hover
                    color: "#FFFFFF", // Icono blanco al hover
                    transform: "scale(1.1)",
                  },
                  transition: "all 0.3s ease",
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={item.href}
                onClick={() => setDrawerOpen(false)}
                sx={{
                  padding: "12px 24px",
                  color: "#1E1E1E",
                  "&:hover": {
                    backgroundColor: "#0b880f",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#1E1E1E", minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                  }}
                />
              </ListItem>
            ))}

            <Divider sx={{ my: 1, borderColor: "rgba(255,255,255,0.2)" }} />

            <ListItem
              component={RouterLink}
                  to="/Login"
              onClick={() => setDrawerOpen(false)}
              sx={{
                padding: "12px 24px",
                color: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#0b880f",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#1E1E1E", minWidth: "40px" }}>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText
                primary="Iniciar Sesión"
                primaryTypographyProps={{
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              />
            </ListItem>

            <ListItem
             component={RouterLink}
                  to="/Register"
              
              onClick={() => setDrawerOpen(false)}
              sx={{
                padding: "12px 24px",
                color: "#1E1E1E",
                "&:hover": {
                  backgroundColor: "#0b880f",
                },
              }}
            >
              <ListItemIcon sx={{ color: "#1E1E1E", minWidth: "40px" }}>
                <HowToRegIcon />
              </ListItemIcon>
              <ListItemText
              
                primary="Registrarse"
                primaryTypographyProps={{
                  fontWeight: 500,
                  letterSpacing: "0.5px",
                }}
              />
            </ListItem>
          </List>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
