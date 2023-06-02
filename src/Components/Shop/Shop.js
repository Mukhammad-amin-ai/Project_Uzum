import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../Common/Card/Card";

export default function Shop() {
  var data = JSON.parse(localStorage.getItem("shop"));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data ? (
        data.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            credit={item.credit}
            skidka={item.skidka}
            price={item.price}
            ocenka={item.ocenka}
            star={item.star}
            descript={item.descript}
          />
        ))
      ) : (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{ width: "128px", height: "128px" }}
            src="https://uzum.uz/static/img/shopocat.8cee444.png"
            alt="#"
          />
          <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
            В корзине пока нет товаров
          </Typography>
          <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
            Начните с подборок на главной странице или найдите нужный товар
            через поиск
          </Typography>
        </Box>
      )}
    </Box>
  );
}
