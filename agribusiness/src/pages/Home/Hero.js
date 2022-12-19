import React from 'react';
import { Container } from "@mui/system";
import { Box, styled, Typography } from "@mui/material";
import CustomButton from "../../common/CustomButton";

import heroImg from "../../media/hero-4.jpg"
import { Link } from 'react-router-dom';

const Hero = () => {

  const HeroContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2)
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      gap: theme.spacing(0),
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "45px",
    color: "#1A4A4A",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <HeroContainer>
      <Container>
        <CustomBox sx={{ mt: 0 }}>
          <Box sx={{ flex: "1" }}>
            <Title variant="h2">
              NUESTRO PROPÓSITO
            </Title>
            <Typography variant="body2" sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
              Sabemos que la solución a la crisis alimentaria y energética mundial es desarrollar las capacidades de los agricultores para implementar prácticas agrícolas sostenibles y eficientes. Es por ello que buscamos brindarles las mejores herramientas para impulsar el desarrollo de la agricultura de precisión.
            </Typography>
            <Link to="/Nosotros" style={{ textDecoration: "none" }}>
              <CustomButton backgroundColor="#04141c" color="#fff" buttonText="Acerca de Nosotros" heroBtn={true} />
            </Link>
          </Box>

          <Box sx={{ flex: ".10", mt: 5 }}>
            <img src={heroImg} alt="Agriculture Precisión" />
          </Box>
        </CustomBox>
      </Container>
    </HeroContainer>
  );
};

export default Hero;