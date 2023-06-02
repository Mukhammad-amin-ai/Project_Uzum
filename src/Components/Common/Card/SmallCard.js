import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

export default function SmallCard({
  img,
  kredit,
  skidka,
  price,
  star,
  ocenka,
  buyBtn,
  icon,
  descript,
}) {
  const [butt, setbutt] = useState(false);

  const but = () => {
    setbutt(!butt);
  };
  return (
    <Box
      sx={{
        width: {
          xs: "140px",
          sm: "140px",
          md: "171px",
          lg: "273px",
          xl: "232px",
        },
        height: {
          xs: "322.66px",
          sm: "322.66px",
          md: "363.99px",
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
            xs: "186.66px",
            sm: "186.66px",
            md: "227.99px",
            lg: "364px",
            xl: "309px",
          },
          bgcolor: "#efefef",
          position: "relative",
        }}
      >
        <Typography
          onClick={but}
          sx={{
            fontSize: "25px",
            color: "#5000aa",
            position: "absolute",
            right: "6px",
            top: "10px",
            cursor: "pointer",
          }}
        >
          {!butt ? <i className="bx bx-heart"></i> : <i className="bx bxs-heart"></i>}
        </Typography>

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
            height: {
              xs:'50px',
              sm:"50px",
              md:'40px',
              lg:'40px',
              xl:'40px'
            },
            display: "flex",
            alignItems: "center",
            overflow:'hidden'
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
            width: "70%",
            height: "15px",
            borderRadius: "6px",
            bgcolor: "#FFFF00",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "11px" }}>{kredit}</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ width: "auto", height: "70%" }}>
            <Typography
              sx={{ fontSize: "11px", textDecoration: "line-through" }}
            >
              {skidka}
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs:'10px',
                  sm:'10px',
                  md: "10px",
                  lg: "15px",
                  xl: "15px",
                },
              }}
            >
              {price}
            </Typography>
          </Box>
          <Typography
            onClick={buyBtn}
            sx={{
              fontSize: "28px",
              position: "absolute",
              bottom: "-15px",
              right: "0",
            }}
          >
            {icon ? (
              <i className="bx bx-shopping-bag"></i>
            ) : (
              <i className="bx bx-cart-add"></i>
            )}
          </Typography>
          
        </Box>
      </Box>
    </Box>
  );
}
