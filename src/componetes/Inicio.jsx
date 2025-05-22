import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Canvas } from '@react-three/fiber';
//iamgenes locales
import modelo from "../assets/modelo.png"; 
import landing from "../assets/Landing.jpg"; 
import aplicativo from "../assets/aplicativo.jpg"
//archivo css
import "./Inicio.css";


//material ui
import { Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

//componente para el efecto de escritura
import TypewriterEffect from "./TypewriterEffect";
//
import { TunnelPanel } from "./TunnelPanel";

const Inicio = () => {
  // Definición de las líneas para el efecto de escritura
  const lines = [
    "Transformamos tus ideas en experiencias digitales que cautivan y convierten",
    "Diseño web moderno y atractivo",
    "Elegancia, funcionalidad y tecnolgia a la vanguardia",
    "Desarrollo web a la medida para tu negocio",
    "Interactiva y responsiva, con una interfaz de usuario amigable",
    "¿Listo para impresionar a tus clientes desde el primer clic?",
  ];

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
                href="https://wa.me/3168120218"
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
      <div className="services">
         <div class="services-overlay"></div> 
        <div class="waves"></div>
        <div class="stars"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="stars"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>

        <div className="serviTitulo">
          <p>servicios</p>
        </div>
        <div className="serviTexto">
          <div className="texto-1">
            <h2>Desarrollo web</h2>
            <h2>Perzonalizado</h2>
          </div>
          <div className="texto-2">
            <TypewriterEffect
              lines={lines}
              speed={100} // Velocidad entre caracteres (ms)
              cursorColor="#b7e998" // Color personalizable
              underlineColor="linear-gradient(90deg, #0b880f, #96e466)" // Degradado personalizable
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>
              Landing Pages a Medida: Elegancia, Funcionalidad y Resultados
            </h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={landing} alt="Landing" />
            </div>
            <div className="card-text">
              <p>
                Diseños <span class="highlight">100% personalizados </span> que
                fusionan estética impactante con estrategias conversivas. Cada
                detalle está pensado para captar atención, transmitir valor y
                guiar a tu audiencia hacia la acción.
              </p>

              <ul>
                <li>
                  {" "}
                  Desarrollo estratégico – Adaptado a tus objetivos (ventas,
                  leads, engagement).
                </li>
                <li>
                  branding: "Diseños que reflejan la esencia de tu marca y
                  conectan emocionalmente."
                </li>
                <li>
                  Mobile First – Experiencia impecable en cualquier dispositivo.
                </li>
              </ul>
            </div>
          </div>

          <div className="btns">
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<StarIcon />}
              sx={{
                fontWeight: 100,
                width: "200px",
                height: "40px", // Altura más pequeña
                minHeight: "40px", // Evita que crezca
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
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              sx={{
                fontWeight: 100,
                width: "200px",
                height: "40px", // Altura más pequeña
                minHeight: "40px", // Evita que crezca
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
              Comprar ahora
            </Button>
          </div>
        </div>
        <div className="canva" >
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>
              Aplicativos Web a Medida: Potencia, Rendimiento y Conversión
            </h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={aplicativo} alt="Landing" />
            </div>
            <div className="card-text">
              <p>
                Diseños <span class="highlight">100% personalizados </span> que combinan arquitectura técnica robusta 
                con UX conversivo. Cada línea de
                 código está optimizada para maximizar engagement y simplificar procesos complejos.
              </p>

              <ul>
                <li>
                 Fullstack a medida - Desarrollo desde backend hasta interfaz, perfectamente integrado
                </li>
                <li>
                   Tecnología responsive - Adaptación perfecta a móvil, tablet y desktop
                </li>
                <li>
                  Integraciones nativas - Conectamos con tus CRM, APIs y herramientas existentes
                </li>
              </ul>
            </div>
          </div>

          <div className="btns">
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<StarIcon />}
              sx={{
                fontWeight: 100,
                width: "200px",
                height: "40px", // Altura más pequeña
                minHeight: "40px", // Evita que crezca
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
            <Button
              variant="outlined"
              color="inherit"
              startIcon={<ShoppingCartIcon />}
              sx={{
                fontWeight: 100,
                width: "200px",
                height: "40px", // Altura más pequeña
                minHeight: "40px", // Evita que crezca
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
              Comprar ahora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
