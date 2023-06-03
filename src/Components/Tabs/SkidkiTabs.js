import { Box, CircularProgress } from "@mui/material";
import React from "react";
import Bazar from "../Home/Bazar";
import Rasrochka from "../Home/Rasrochka";
import { useGetProductsQuery } from "../../Api/RTKApi/RTKApi";
import SmallCard from "../Common/Card/SmallCard";

export default function SkidkiTabs() {
  let product =[]
  const { data = [], isLoading, isError } = useGetProductsQuery();
  product=data.filter((item) => item.type === "skidki")
 
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
  return (
    <Box sx={{ width: "100%",height:"auto" }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-evenly",
          gap:'10px'
        }}
      >
        {product.length !== 0
          ? product.map((item, index) => (
              <SmallCard
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
          justifyContent:"space-evenly",
          gap:'10px'
        }}
      >
        {product.length !== 0
          ? product.map((item, index) => (
              <SmallCard
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
