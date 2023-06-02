import { Box } from "@mui/material";
import React from "react";
import  Router  from "./Routes/router";
import Navbar from "./Components/Common/Navbar/Navbar";
import Top from "./Components/Common/Top/Top";
import Footer from "./Components/Common/Footer/Footer";
import FooterSmall from "./Components/Common/Footer/FooterSmall";

export default function App() {
  return (
    <Box
      sx={{
        width: "100%",
        Height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Top />
      <Box
        sx={{
          width: {
            xs: "95%",
            sm: "95%",
            md: "100%",
            lg: "95%",
            xl: "80%",
          },
          minHeight: "150vh",
        }}
      >
        <Navbar />
        <>
          <Router />
        </>
        <FooterSmall />
        <Footer />
      </Box>
    </Box>
  );
}
