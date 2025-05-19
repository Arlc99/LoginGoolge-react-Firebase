import React from "react";
import logo from "../assets/logo.png";
import modelo from "../assets/modelo.png"; // Asegúrate de tener la imagen en la ruta correcta

import "./Inicio.css";
import { Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
const Inicio = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <div className="texto">
            <h1>DevWeb/UX</h1>
            <p>
              Desarrolla la web de tu negocio y llevalo a otro nivel de calidad
              y competencia
            </p>
            <div className="boton">
              <Button
                variant="outlined"
                color="inherit"
                startIcon={<StarIcon />}
                sx={{
                  fontWeight: 100,
                  width: "150px",
                  height: "24px", // Altura más pequeña
                  minHeight: "24px", // Evita que crezca
                  fontSize: "10px",
                  color: "#ffffff", // Texto blanco
                  backgroundColor: "#0b880f", // Hereda el color de fondo
                  borderColor: "#0b880f",
                  "&:hover": {
                    backgroundColor: "rgba(4, 77, 6,)", // Verde 5% opacidad
                    borderColor: "#0b880f",
                  },
                  transition: "all 0.2s ease",
                  padding: "0 8px", // Ajuste de padding para altura pequeña
                  textTransform: "none", // Evita mayúsculas automáticas
                  lineHeight: 1, // Altura de línea compacta
                }}
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className="redes">
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* Enlace a Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1E1E1E" }} // Color personalizado
              >
                <FacebookIcon fontSize="medium" />
              </a>

              {/* Enlace a Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1E1E1E" }}
              >
                <InstagramIcon fontSize="medium" />
              </a>

              {/* Enlace a GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1E1E1E" }}
              >
                <GitHubIcon fontSize="medium" />
              </a>

              {/* Enlace a WhatsApp */}
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#1E1E1E" }}
              >
                <WhatsAppIcon fontSize="medium" />
              </a>
            </Box>
          </div>
        </div>
        <div className="modelo">
          <img src={modelo} alt="Modelo" />
        </div>
      </div>
    </div>
  );
};

export default Inicio;
