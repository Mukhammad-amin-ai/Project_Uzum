import React from "react";

import { Box, Button, Typography } from "@mui/material";
import Card from "../Common/Card/Card";

export default function Favorites() {
  var data = JSON.parse(localStorage.getItem("liked"));
  console.log(data);

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "strech",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            borderBottom: "1px solid ",
          }}
        >
          <Typography sx={{fontSize:"20px",fontWeight:600}}>Мои желания</Typography>
          <Box
            sx={{
              width: "100%",
              height: "50%",
              display: "flex",
              justifyContent: "end",
              alignItems:'center'
            }}
          >
            <Typography>Сортировка</Typography>
            <Button>populyar</Button>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap:"10px",
            flexWrap:'wrap'
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

                //  handleupdate={()=>handleupdate(index)}
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
              src="https://uzum.uz/static/img/hearts.cf414be.png"
              alt="#"
            />
            <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
              Добавьте то, что понравилось
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 400 }}>
              Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное
              сохранится
            </Typography>
          </Box>
        )}   </Box>
      </Box>
    </Box>
  );
}
