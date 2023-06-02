import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "128px", height: "128px" }}>
        <img
          style={{ width: "100%" }}
          src="https://uzum.uz/static/img/penguin.a739ac8.png"
          alt=""
        />
      </Box>
      <Typography sx={{ fontSize: "22px" }}>
        Мы не нашли то, что вы искали
      </Typography>
      <Typography sx={{ fontSize: "13px" }}>
        Возможно, в названии товара ошибка или у нас пока нет такого товара
      </Typography>
    </Box>
  );
}
