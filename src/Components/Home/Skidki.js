import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";

import Card from "../Common/Card/Card";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../Api/RTKApi/RTKApi";

export default function Skidki() {
  let product = [];
  let [showBtn, setShowBtn] = useState("flex");
  let [hiddenBtn, setHiddenBtn] = useState("none");
  let [toggle, setToggle] = useState(true);
  let [liked, setLiked] = useState([]);
  const { data = [], isLoading, isError } = useGetProductsQuery();

  const showAll = () => {
    setShowBtn("none");
    setHiddenBtn("flex");
    setToggle(!toggle);
  };
  product = data.filter((item) => item.type === "skidki");

  if (isLoading)
    return (
      <div
        style={{
          width: "100%",
          height: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  if (isError) {
    return <div>Error occurred.</div>;
  }

  var handleupdate = (index) => {
    let obj = product[index];
    liked.push(obj);
    localStorage.setItem("liked", JSON.stringify(liked));
    setLiked(liked);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "#000",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
            Cкидки
          </Typography>
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {!toggle
          ? product.map((item, index) => (
              <Link style={{textDecoration:"none",color:"#000"}} to={`product/${product[index].id}`}>
                <Card
                  key={index}
                  img={item.img}
                  credit={item.credit}
                  skidka={item.skidka}
                  price={item.price}
                  ocenka={item.ocenka}
                  star={item.star}
                  descript={item.descript}
                  handleupdate={() => handleupdate(index)}
                />
              </Link>
            ))
          : product.splice(0, 20).map((item, index) => (
              <Link style={{textDecoration:"none",color:"#000"}} to={`product/${product[index].id}`}>
                <Card
                  key={index}
                  img={item.img}
                  credit={item.credit}
                  skidka={item.skidka}
                  price={item.price}
                  ocenka={item.ocenka}
                  star={item.star}
                  descript={item.descript}
                  handleupdate={() => handleupdate(index)}
                />
              </Link>
            ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          onClick={showAll}
          sx={{
            width: "740px",
            height: "54px",
            display: showBtn,
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgba(118, 121, 127, 0.1)",
            ":hover": { bgcolor: "rgba(118, 121, 127, 0.20)" },
          }}
        >
          <Typography sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}>
            показать еще 20
          </Typography>
        </Button>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button
            sx={{
              width: "740px",
              height: "54px",
              display: hiddenBtn,
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(118, 121, 127, 0.1)",
              ":hover": { bgcolor: "rgba(118, 121, 127, 0.20)" },
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}
            >
              Посмотреть всю подборку
            </Typography>
          </Button>
        </Link>
      </Box>
    </>
  );
}
