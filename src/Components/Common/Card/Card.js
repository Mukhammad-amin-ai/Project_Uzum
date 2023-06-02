import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Card({
  img,
  credit,
  skidka,
  price,
  star,
  ocenka,
  buyBtn,
  descript,
  handleupdate
}){
  
  let [icon,setIcon]=useState(false)
    
  const click = ()=>{
    handleupdate()
    setIcon(true)
  }

  return (
    <Box
      sx={{
        width: {
          xs: "180px", //400
          sm: "250px", //600
          md: "279.68px", //900
          lg: "273px", //1200
          xl: "232px", //1500
        },
        height: {
          xs: "450.66px",
          sm: "480.61px",
          md: "508.9px",
          lg: "511px",
          xl: "456px",
        },
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        ":hover": {
          transition: ".25s all linear",
          boxShadow: "2px 12px 20px 5px rgba(34, 60, 80, 0.2)",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "249px",
            sm: "374px",
            md: "379px",
            lg: "364px",
            xl: "309px",
          },
          bgcolor: "#efefef",
          position: "relative",
        }}
      >
        <Button
          onClick={click}
          sx={{
            position: "absolute",
            right: "6px",
            top: "10px",
            cursor: "pointer",
            backgroundColor:"transparent",
            ':hover':{backgroundColor:"transparent"}
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              color: "#5000aa",
            }}
          >
            { icon ? (
              <i className="bx bxs-heart"></i>
              ) : (
                <i className="bx bx-heart"></i>
                )}
          </Typography>
        </Button>

        <Box
          sx={{
            width: "70px",
            height: "20px",
            position: "absolute",
            bottom: "0px",
            left: "0px",
            bgcolor: "#5000aa",
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
          }}
        >
          <Typography sx={{ fontSize: "13px", color: "white" }}>
            Акция
          </Typography>
        </Box>
        <img style={{ width: "100%", height: "100%" }} src={img} alt="#" />
      </Box>
      <Box sx={{ width: "90%", height: "147px", marginLeft: "5%" }}>
        <Box
          sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>{descript}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "22px",
            display: "flex",
            alignItems: "center",
            fontSize: "11px",
          }}
        >
          <i className="bx bx-star"></i>
          <Typography sx={{ fontSize: "11px", color: "#000" }}>
            {star}({ocenka} оценок)
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "15px",
            borderRadius: "10px",
            bgcolor: "#FFFF00",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>{credit}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "30px",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ width: "auto", height: "20px" }}>
            <Typography
              sx={{ fontSize: "11px", textDecoration: "line-through" }}
            >
              {skidka}
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>{price}</Typography>
          </Box>
          <Button
            onClick={buyBtn}
            sx={{ position: "absolute", bottom: "-15px", right: "0" }}
          >
            <Typography sx={{ fontSize: "28px" }}>
              {icon ? (
                <i className="bx bx-shopping-bag"></i>
              ) : (
                <i className="bx bx-cart-add"></i>
              )}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
