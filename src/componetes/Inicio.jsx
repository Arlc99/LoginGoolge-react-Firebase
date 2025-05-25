import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Canvas } from "@react-three/fiber";
//iamgenes locales
import modelo from "../assets/modelo.png";
import landing from "../assets/Landing.jpeg";
import aplicativo from "../assets/aplicativo.jpeg";
import crm from "../assets/CRM.jpeg";
import inventario from "../assets/cc.jpg";
import finanzas from "../assets/finanzas.jpeg";
import roboto from "../assets/robot.png";
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
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

//componente para el efecto de escritura
import TypewriterEffect from "./TypewriterEffect";
//
import { TunnelPanel } from "./TunnelPanel";

const Inicio = () => {
  // Definición de las líneas para el efecto de escritura
  const lines = [
    "Transformamos tus procesos en sistemas integrados que optimizan y automatizan tu negocio",
    "La sinergia perfecta entre ERP y CRM para una empresa conectada",
    "Elegancia, funcionalidad y tecnolgia a la vanguardia",
    "Soluciones integrales que unifican operaciones, ventas y atención al cliente",
    "¿Listo para llevar la gestión de tu empresa al siguiente nivel?",
    "¿Listo para impresionar a tus clientes desde el primer clic?",
  ];

  return (
    <div>
      <div className="container">
        <div className="logo">
          <div className="texto">
            <h1>ERP+CRM Integrado</h1>
            <p>
              Transforma la gestión de tu negocio: automatiza procesos,
              centraliza información y toma decisiones basadas en datos.
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
        <div className="waves"></div>
        <div className="stars"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div clasName="star"></div>
        <div className="stars"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>

        <div className="serviTitulo">
          <p>servicios</p>
        </div>
        <div className="serviTexto">
          <div className="texto-1">
            <h2>ERP+CRM</h2>
            <h2> AUTOMATIZA TU EMPRESA</h2>
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
              Facturación Electrónica Integrada: Exacta, Segura y Automatizada
            </h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={crm} alt="Landing" />
            </div>
            <div className="card-text">
              <p>
                Soluciones{" "}
                <span className="highlight">100% adaptadas a SAT </span> que
                unen cumplimiento legal con eficiencia operativa. Cada proceso
                está diseñado para evitar errores, reducir tiempos y optimizar
                tu flujo financiero.
              </p>

              <ul>
                <li>
                  <strong>Integración total</strong> – Conecta con tu ERP, CRM o
                  sistema contable actual.
                </li>
                <li>
                  <strong>Cumplimiento garantizado</strong> – Certificaciones
                  CFDI 4.0 y manejo de complementos (nómina, pagos).
                </li>
                <li>
                  <strong>Automatización inteligente</strong> – Timbre
                  automático, alertas fiscales y repositorio digital organizado.
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
          </div>
        </div>

        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>
              Landing Pages Profesionales en Horas <br />
              <span className="subtitle">
                Plantillas Premium 100% Personalizables
              </span>
            </h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={aplicativo} alt="Landing" />
            </div>
            <div className="card-text">
              <p>
                Transforma plantillas en{" "}
                <span className="highlight">páginas de alto rendimiento</span>
                sin empezar desde cero. Ideal para campañas rápidas,
                lanzamientos o promociones que no pueden esperar.
              </p>

              <ul>
                <li>
                  <strong>Biblioteca de plantillas</strong> – Diseños modernos
                  para todos los sectores
                </li>
                <li>
                  <strong>Editor intuitivo</strong> – Cambia textos, colores y
                  fotos en minutos (sin técnicos)
                </li>
                <li>
                  <strong>Responsive garantizado</strong> – Perfecto en móviles,
                  tablets y desktop
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
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="card">
          <div className="card-header">
            <h2>
              Sistema ERP/CRM Todo-en-Uno <br />
              <span className="subtitle">
                Automatiza ventas, operaciones y atención al cliente
              </span>
            </h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={landing} alt="Crm" />
            </div>
            <div className="card-text">
              <p>
                <span className="highlight">Unifica tu negocio</span> en una
                plataforma inteligente que sincroniza equipos, datos y procesos.
                Deja atrás los sistemas fragmentados.
              </p>

              <ul>
                <li>
                  <strong>CRM avanzado</strong> – Funnel de ventas, seguimiento
                  360° y automatización de leads
                </li>
                <li>
                  <strong>ERP modular</strong> – Inventario, compras, producción
                  y finanzas en tiempo real
                </li>
                <li>
                  <strong>Multiplataforma</strong> – Acceso desde oficina, campo
                  o móvil con datos siempre sincronizados
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
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="card">
          <div className="card-header">
            <h2> Gestión Maestra de Inventario</h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={inventario} alt="inventario" />
            </div>
            <div className="card-text">
              <p>
                <span className="highlight">
                  Sistema centralizado de productos{" "}
                </span>{" "}
                para mantener tu inventario siempre actualizado y organizado
                bajo tus propias reglas.
              </p>

              <ul>
                <li>
                  <strong>Inventario en tiempo real</strong> - Con alertas de
                  reposición y caducidad
                </li>
                <li>
                  <strong>Categorización avanzada</strong> - Estructura
                  jerárquica personalizable (familias, subfamilias, atributos)
                </li>
                <li>
                  <strong>Reportes de inventario</strong> - Valorización,
                  rotación de stock y análisis ABC
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
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>

        <div className="card">
          <div className="card-header">
            <h2> Módulo de Finanzas Integral</h2>
          </div>
          <div className="card-content">
            <div className="card-img">
              <img src={finanzas} alt="inventario" />
            </div>
            <div className="card-text">
              <p>
                <span className="highlight">
                  El centro nervioso de tu negocio:
                </span>{" "}
                Convierte datos financieros en decisiones estratégicas con
                herramientas profesionales para gestión fiscal y análisis de
                rentabilidad.
              </p>

              <ul>
                <li>
                  <strong>Nóminas 100% compatibles con el SAT</strong> - Cálculo
                  automático de ISR, IMSS, préstamos y percepciones
                </li>
                <li>
                  <strong>Ventas consolidadas</strong> - Comparativo histórico
                  por periodo con filtros personalizados
                </li>
                <li>
                  <strong>Análisis de ganancias</strong> - Margen bruto/neto por
                  producto, línea o sucursal
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
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>

        <div className="acerca">
          <div className="img-acer">
            <img src={logo} alt="logo" className="logo-hover" />
          </div>
          <div className="texto">
            <div className="texto-1">
              <h2 className="">VIP</h2>
              <h2 className="">DEVELOPMENT</h2>
            </div>

            <div className="texto-s">
              <h4 className="subtitle-beam">
                Sistemas ERP/CRM que{" "}
                <span className="text-underline">reducen costos</span> y{" "}
                <span className="text-underline">aumentan productividad</span>
              </h4>
              <h4 className="subtitle-beam">
                <span className="tech-pill">+30% eficiencia operativa*</span> |
                <span className="tech-pill"> Ventas + coordinadas</span> |
                <span className="tech-pill">Decisiones con datos</span>
              </h4>
            </div>

            <div className="texto-p">
              <p className="glow-text">
                Impulsamos pymes y startups hacia la{" "}
                <strong className="highlight-pulse">excelencia digital</strong>,
              </p>
              <p className="glow-text">
                construyendo su{" "}
                <span className="text-underline">autoridad online</span> con
                tecnología premium
              </p>
            </div>
          </div>
        </div>
        <div className="canva">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <TunnelPanel />
            <ambientLight intensity={0.5} />
          </Canvas>
        </div>
        <div className="contacto">
          <div className="card">
            <div className="content-contacto">
              <h1>Contacto</h1>

              <div className="corre">
                <input
                  type="email"
                  className="input-field"
                  placeholder="tu correo "
                  required
                />
                <label className="input-label">Email</label>
              </div>

              <Button
                variant="outlined"
                color="inherit"
                startIcon={<SendIcon />}
                sx={{
                  fontWeight: 100,
                  width: "200px",
                  height: "40px", // Altura más pequeña
                  minHeight: "40px", // Evita que crezca
                  fontSize: "15px",
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
                Enviar
              </Button>

              <div className="contacto-info">
                <div className="info-item">
                  <MailOutlineIcon
                    style={{ color: "#0b880f", marginRight: 8 }}
                  />
                  <p className="info-text">contacto@vipdev.com</p>
                </div>
                <div className="info-item">
                  <PhoneIcon style={{ color: "#0b880f", marginRight: 8 }} />
                  <p className="info-text"> +57 316-812-0218</p>
                </div>
              </div>
            </div>
          </div>
          <div class="robot-float">
            <img src={roboto} alt="Asistente ERP" />
          </div>
        </div>
      </div>
      <footer className="erp-footer">
        {/* Sección superior */}
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src={logo}
              alt="VIP DEVELOPMENT"
              className="footer-logo"
            />
            <p className="footer-slogan">
              Transformando negocios con tecnología inteligente
            </p>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Sistema</h4>
              <a href="#" className="footer-link">
                Módulos
              </a>
              <a href="#" className="footer-link">
                Actualizaciones
              </a>
              <a href="#" className="footer-link">
                API
              </a>
            </div>

            <div className="link-group">
              <h4 className="link-title">Recursos</h4>
              <a href="#" className="footer-link">
                Documentación
              </a>
              <a href="#" className="footer-link">
                Tutoriales
              </a>
              <a href="#" className="footer-link">
                Blog
              </a>
            </div>

            <div className="link-group">
              <h4 className="link-title">Legal</h4>
              <a href="#" className="footer-link">
                Términos
              </a>
              <a href="#" className="footer-link">
                Privacidad
              </a>
              <a href="#" className="footer-link">
                Soporte
              </a>
            </div>
          </div>
        </div>

        {/* Divisor estilizado */}
        <div className="footer-divider">
          <div className="glow-line"></div>
        </div>

        {/* Sección inferior */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 VIP DEVELOPMENT. Todos los derechos reservados
          </p>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <WhatsAppIcon fontSize="medium" />
            </a>
            <a href="#" className="social-icon" aria-label="GitHub">
               <GitHubIcon fontSize="medium" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
