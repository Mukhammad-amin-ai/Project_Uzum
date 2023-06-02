import { Box, Button, Typography } from "@mui/material";
import React from "react";
import rus from "../../../Images/rus.png";
export default function Top() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "32px",
        bgcolor: "#F4F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "80%",
          },
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          gap: "18px",
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box
            sx={{
              width: "140px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>
              <i className="bx bx-map"></i>
            </Typography>
            <Typography>Город:</Typography>
            <Typography sx={{ textDecoration: "underline", fontWeight: "600" }}>
              Ташкент
            </Typography>
          </Box>

          <Box
            sx={{
              width: "140px",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>Пункты выдачи</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "440px",
            height: "100%",
            display: {
              xs: "flex",
              sm: "flex",
              md: "flex",
              lg: "none",
              xl: "flex",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>
            Доставим ваш заказ бесплатно — всего за 1 день!
          </Typography>
        </Box>
        <Box
          sx={{
            width: "40%",
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "flex",
              xl: "flex",
            },
          }}
        >
          <Box
            sx={{
              width: "190px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>
              Продавайте на Uzum
            </Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Вопрос-ответ</Typography>
          </Box>
          <Box
            sx={{
              width: "120px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "14px" }}>Мои заказы</Typography>
          </Box>
          <Button sx={{ display: "flex", gap: "10px" }}>
            <img src={rus} alt="#" />
            <Typography sx={{ fontSize: "14px" }}>Русский</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
