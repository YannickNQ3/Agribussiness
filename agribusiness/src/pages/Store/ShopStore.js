import React from 'react'
import { styled, Box } from '@mui/material';

const ShopStore = () => {
  const ShopContainer = styled(Box)(({ theme }) => ({
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
    <ShopContainer>Shop</ShopContainer>
  )
}

export default ShopStore