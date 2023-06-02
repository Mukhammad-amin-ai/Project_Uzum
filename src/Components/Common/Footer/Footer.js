import { Box, Typography } from "@mui/material";
import React from "react";
import Bottom from "../Bottom/Bottom";
import appstore from "../../../Images/apple-black-logo-svgrepo-com.svg";
import googlePlay from "../../../Images/Google_Play-Logo.wine.svg";
import inst from "../../../Images/Instagram-Logo.wine.svg";
import tg from "../../../Images/telegram-logo-svgrepo-com.svg";
import you from "../../../Images/youtube-icon-logo-svgrepo-com.svg";
import face from "../../../Images/facebook-icon-logo-svgrepo-com.svg";
export default function Footer() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "none",
          lg: "flex",
          xl: "flex",
        },
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            width: "20%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              О нас
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Пункты выдачи</Typography>
            <Typography sx={{ fontSize: "12px" }}>Вакансии</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "40%",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "none",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              Скачать приложение
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "30%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={appstore}
                  alt=""
                />
                <Typography>AppStore</Typography>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  height: "30%",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <img
                  style={{ width: "150px", height: "40px" }}
                  src={googlePlay}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "20%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              Пользователям
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>Связаться с нами</Typography>
            <Typography sx={{ fontSize: "12px" }}>Вопрос - Ответ</Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "none",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              Uzum в соцсетях
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "strech",
              }}
            >
              <img style={{ width: "20%", height: "30%" }} src={inst} alt="#" />
              <img style={{ width: "15%", height: "25%" }} src={tg} alt="#" />
              <img style={{ width: "20%", height: "30%" }} src={you} alt="#" />
              <img style={{ width: "15%", height: "25%" }} src={face} alt="#" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "20%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            Для предпринимателей
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>Продавайте на Uzum</Typography>
          <Typography sx={{ fontSize: "12px" }}>Вход для продавцов</Typography>
        </Box>
        <Box sx={{ width: "20%", height: "100%", display: "flex",
            flexDirection: "column",
            justifyContent:"end"}}>
          <Box
            sx={{
              width: "100%",
              height: "40%",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              Скачать приложение
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  height: "30%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "30px", height: "30px" }}
                  src={appstore}
                  alt=""
                />
                <Typography>AppStore</Typography>
              </Box>
              <Box
                sx={{
                  width: "50%",
                  height: "30%",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <img
                  style={{ width: "150px", height: "40px" }}
                  src={googlePlay}
                  alt=""
                />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "40%",
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "none",
                xl: "block",
              },
            }}
          >
            <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
              Uzum в соцсетях
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "80%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "strech",
              }}
            >
              <img style={{ width: "20%", height: "30%" }} src={inst} alt="#" />
              <img style={{ width: "15%", height: "25%" }} src={tg} alt="#" />
              <img style={{ width: "20%", height: "30%" }} src={you} alt="#" />
              <img style={{ width: "15%", height: "25%" }} src={face} alt="#" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Bottom />
    </Box>
  );
}
