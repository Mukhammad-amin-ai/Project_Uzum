import { Box, Typography } from "@mui/material";
import React from "react";

export default function Bottom() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "6vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            xs:"100vw",
            sm:'100vw',
            md:"100vw",
            lg:'80vw',
            xl:'80vw'
          },
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop:{
            xs:'none',
            sm:'none',
            md:'none',
            lg: "1px solid grey",
            xl: "1px solid grey"
          },
          flexDirection: {
            xs:'column',
            sm:'column',
            md:'column',
            lg:'unset',
            xl:'unset'
          },
          gap:{
            xs:'10px',
            sm:'10px',
            md:'10px',
            lg:'0',
            xl:'0'
          }
        }}
      >
        <Box sx={{ display: "flex", gap: '10px', flexDirection: {
          xs:'column',
          sm:'column',
          md:'column',
          lg:'unset',
          xl:'unset'
        }, alignItems:{
          xs:'center',
          sm:'center',
          md:'center',
          lg:'unset',
          xl:'unset',
        } }}>
          <Typography
            sx={{
              fontSize: {
                xl: "14px",
              },
              fontWeight: "600",
            }}
          >
            Соглашение о конфиденциальности
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
            Пользовательское соглашение
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "11px" }}>
          «2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»
        </Typography>
      </Box>
    </Box>
  );
}
