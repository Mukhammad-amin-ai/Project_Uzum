import { Box, Typography } from "@mui/material";
import React from "react";
import Bottom from "../Bottom/Bottom";
import CustomizedAccordions from "./CustomizedAccordions";
import appl from "../../../Images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import gogl from "../../../Images/google-play-download-android-app-logo-svgrepo-com.svg";
import inst from "../../../Images/Instagram-Logo.wine.svg";
import tg from "../../../Images/telegram-logo-svgrepo-com.svg";
import you from "../../../Images/youtube-icon-logo-svgrepo-com.svg";
import face from "../../../Images/facebook-icon-logo-svgrepo-com.svg";
export default function FooterSmall() {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          sm: "flex",
          md: "flex",
          lg: "none",
          xl: "none",
        },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "240px",
          display: {
            xs: "flex",
            sm: "flex",
            md: "flex",
            lg: "none",
            xl: "none",
          },
          justifyContent: "center",
        }}
      >
        <CustomizedAccordions />
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "400px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Скачать приложение</Typography>
            <img style={{ width: "50%", height: "50%" }} src={appl} alt="" />
            <img style={{ width: "50%", height: "50%" }} src={gogl} alt="" />
          </Box>
          <Typography>Uzum в соцсетях</Typography>
          <Box
            sx={{
              width: "30%",
              height: "50%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <img style={{ width: "44px", height: "44px" }} src={inst} alt="#" />
            <img style={{ width: "38px", height: "44px" }} src={tg} alt="#" />
            <img style={{ width: "45px", height: "44px" }} src={you} alt="#" />
            <img style={{ width: "40px", height: "44px" }} src={face} alt="#" />
          </Box>
        </Box>
      </Box>
      <Bottom />
    </Box>
  );
}
