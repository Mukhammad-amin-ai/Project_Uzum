import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bazar from "../Home/Bazar";
import axios from "axios";
import { Api } from "../../Api/Api";
import Card from "../Common/Card/Card";
import Rasrochka from "../Home/Rasrochka";

export default function Skidki() {
  let product =[]
  let [data,setData]=useState([])
  useEffect(() => {
    axios
      .get(Api + "product")
      .then((res) => setData(res.data));
  }, []);
    product=data.filter((item) => item.type === "skidki")

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"center",
          gap:'5px'
        }}
      >
        {product.length !== 0
          ? product.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                kredit={item.kredit}
                skidka={item.skidka}
                price={item.price}
                ocenka={item.ocenka}
                star={item.star}
                icon={item.activeIcon}
                descript={item.descript}
              />
            ))
          : ""}
      </Box>
      <Rasrochka/>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"center",
          gap:'5px'
        }}
      >
        {product.length !== 0
          ? product.map((item, index) => (
              <Card
                key={index}
                img={item.img}
                kredit={item.kredit}
                skidka={item.skidka}
                price={item.price}
                ocenka={item.ocenka}
                star={item.star}
                icon={item.activeIcon}
                descript={item.descript}
                // buyBtn={() => buyBtn(index)}
              />
            ))
          : ""}
      </Box> 
      <Bazar />
    </Box>
  );
}
