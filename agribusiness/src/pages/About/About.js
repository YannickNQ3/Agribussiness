import React from 'react'
import { styled, Box } from '@mui/material';

const About = () => {
  const AboutContainer = styled(Box)(({ theme }) => ({
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
    <AboutContainer>About</AboutContainer>
  )
}

export default About