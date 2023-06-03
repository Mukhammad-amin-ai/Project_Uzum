import { Box, Typography,CircularProgress } from "@mui/material";
import React  from "react";
import { Link } from "react-router-dom";


import Slides from "../Common/Slides/Slides";
import { useGetProductsQuery } from "../../Api/RTKApi/RTKApi";

export default function Bazar() {

  let product =[]

  const { data = [], isLoading,isError } = useGetProductsQuery();
  product = data.filter((item) => item.type === "bazar");
  
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
  return <div> Error occurred.</div>;
}
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
          <Typography sx={{ fontSize: {
            xs:"18px",
            sm:'18px',
            md:"20px",
            lg:'25px',
            xl:'28px'
          }, fontWeight: "700" }}>
          Базар не выходя из дома
          </Typography>
          <i style={{ fontSize: "30px" }} className="bx bx-chevron-right"></i>
        </Link>
      </Box>
      <Slides product={product} />
    </>
  );
}
