import HeroSlider, { Slide } from 'hero-slider';
import { Box, Typography, styled, } from '@mui/material';

import heroImg1 from "../../media/home-1.jpg";
import heroImg2 from "../../media/home-2.jpg";
import heroImg3 from "../../media/home-3.jpg";

const Carousel = () => {
  
  const Wrapper = styled('div')(({ theme }) => ({
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    margin: "0 auto",
    backgroundColor: "rgba(30, 35, 40, 0.6)",
    textAlign: "center",
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "45px",
    color: "#fff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("md")]:{
      fontSize: "2.rem"
    },
    [theme.breakpoints.down("sm")]:{
      fontSize: "1.5rem"
    }
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(9),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));


  return (
    <CustomBox>
      <HeroSlider
        height= "80vh"
        slidingAnimation="top_to_bottom"
        orientation="horizontal"
        initialSlide={1}
        style={{
          color: '#FFF',
        }}
        settings={{
          slidingDuration: 100,
          slidingDelay: 10,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 8000,
        }}
      >
        <Slide
          background={{
            backgroundImageSrc: heroImg1
          }}
        >
          <Wrapper>
            <Title>
              Bienvenido a AGRI
            </Title>
            <Typography variant="subtitle1">
              Empresa dedicada a promover la agricultura de precisión brindando herramientas a los agricultores.
            </Typography>
          </Wrapper>
        </Slide>

        <Slide
          background={{
            backgroundImageSrc: heroImg2
          }}
        >
          <Wrapper>
            <Title>
              AgriControlApp
            </Title>
            <Typography variant="subtitle1">
              Monitorea tus cultivos desde la comodidad de tu movil.
            </Typography>
          </Wrapper>
        </Slide>

        <Slide
          background={{
            backgroundImageSrc: heroImg3
          }}
        >
          <Wrapper>
            <Title>
              AgriSystem
            </Title>
            <Typography variant="subtitle1">
              Además contamos con un sistema en linea donde podras ver los reportes de tus cultivos.
            </Typography>
          </Wrapper>
        </Slide>
      </HeroSlider>
    </CustomBox >
  )
}

export default Carousel;