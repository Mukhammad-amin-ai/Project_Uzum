import {
  Box,
  Button,
  CircularProgress,
  List,
  ListItemButton,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetCategoryQuery } from "../Api/RTKApi/GetCategoty";
import Card from "./Common/Card/Card";
import { useGetProductsQuery } from "../Api/RTKApi/RTKApi";

export default function FilterCategory() {
  let { id } = useParams();
  let { data: newcategory = [], isLoading, isError } = useGetCategoryQuery();
  let { data: product = [] } = useGetProductsQuery();
  let category1 = [];
  let [liked, setLiked] = useState([]);
  let [count, setCount] = useState(21);
  let [page, setPage] = useState(1);
  category1 = newcategory.filter((item) => +item.compare === +id);
  // let other1 = [];
  // other1 = category1.map((item) => item.category);
  // product.splice(50);


  const changedFunc = () => {
    setCount(count);
    if (page <= 5) {
      setPage(page + 1);
    } else setPage(1);
  };
  var handleupdate = (index) => {
    let obj = product[index];
    liked.push(obj);
    localStorage.setItem("liked", JSON.stringify(liked));
    setLiked(liked);
  };
  const listClick = (index) => {
    // setother(other[index].other)
    //  other = other1[0].other
  };

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
  console.log(category1[0].category[0].other);
  return (
    <>
      <Box sx={{ width: "100%", height: "auto" }}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
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
            <Box sx={{ width: "100%", height: "40px" }}></Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
              {category1[0].name}
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "50%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Typography>Сортировка</Typography>
              <Button>populyar</Button>
            </Box>
          </Box>
          <Box
            sx={{ width: "95%", height: "100%", display: "flex", gap: "50px" }}
          >
            <Box
              sx={{
                width: "350px",
                height: "450vh",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "350px",
                  height: "80vh",
                }}
              >
                <Button
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    color: "black",
                    display: "flex",
                    justifyContent: "start",
                  }}
                >
                  <Typography>{category1[0].name}</Typography>
                </Button>
                <List>
                  {category1[0].category ? (
                    category1[0].category.map((item, index) => (
                      <ListItemButton onClick={() => listClick(index)}>
                        <Typography>{item.name}</Typography>
                      </ListItemButton>
                    ))
                  ) : (
                    <ListItemButton>
                      <Typography>something</Typography>
                    </ListItemButton>
                  )}
                </List>
              </Box>
            </Box>
            <Box
              sx={{
                width: "840px",
                height: "auto",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                marginTop: "20px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "840px",
                  height: "auto",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-evenly",
                  gap: "10px",
                }}
              >
                {product.length !== 0
                  ? product.map((item, index) => (
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
                    ))
                  : ""}
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Stack>
                  <Pagination count={5} page={page} onChange={changedFunc} />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
