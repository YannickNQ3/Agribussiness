import React from 'react'
import { styled, Box } from '@mui/material';

const Contact = () => {
  const ContactContainer = styled(Box)(({ theme }) => ({
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
    <ContactContainer>Contact</ContactContainer>
  )
}

export default Contact