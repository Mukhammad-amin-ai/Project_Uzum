import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { Box } from "@mui/material";
import "../../Slider/Slider.css";
import SmallCard from "../Card/SmallCard";
import { Link } from "react-router-dom";
export default function Slides({ product }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "60vh",
            sm: "60vh",
            md: "60vh",
            lg: "100vh",
            xl: "70vh",
          },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Swiper
          style={{
            width: "100vw",
            height: "100%",
          }}
          navigation={true}
          slidesPerView={2}
          spaceBetween={10}
          pagination={false}
          modules={[Pagination, Navigation]}
          breakpoints={{
            400: {
              width: 400,
              slidesPerView:2,
              
            },
            600: {
              width: 600,
              slidesPerView: 4,
            },
            900: {
              width: 900,
              slidesPerView: 5,
            },
            1536: {
              width: 1536,
              slidesPerView: 6,
            },
          }}
        >
          {product.length !== 0
            ? product.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link
                    style={{ textDecoration: "none", color: "#000" }}
                    to={`product/${product[index].id}`}
                  >
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
                  </Link>
                </SwiperSlide>
              ))
            : ""}
        </Swiper>
      </Box>
    </>
  );
}
