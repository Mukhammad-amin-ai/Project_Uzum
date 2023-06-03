import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
  HashNavigation,
} from "swiper";

import "./Slider.css";
import { Box } from "@mui/material";

export default function Slider() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: {
            xs:'200px',
            sm:'400px',
            md:'400px',
            lg:'400px',
            xl:'400px'
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding:'10px 0 10px 0'
        }}
      >
        <Swiper
          spaceBetween={5}
          navigation={true}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          hashNavigation={{
            watchState: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Keyboard, HashNavigation]}
          className="mySwiper"
          style={{
            width: "100%",
            height: '100%',
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <SwiperSlide   data-hash="slide1">
            <img 
              src="https://images.uzum.uz/ch89sjl01ighkhg8uqsg/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide2">
            <img
              src="https://images.uzum.uz/ch89thh25ku7n481mg3g/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide3">
            <img
              src="https://images.uzum.uz/cghdvrjfkbipbv1u94ig/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide4">
            <img
              src="https://images.uzum.uz/cgqg0d357mg9720egv60/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide5">
            <img
              src="https://images.uzum.uz/cgqfv57g49devoadeung/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide6">
            <img
              src="https://images.uzum.uz/cgqfvnvg49devoadeuu0/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
          <SwiperSlide data-hash="slide7">
            <img
              src="https://images.uzum.uz/cg7hqbfhj8j9g699qoa0/main_page_banner.jpg"
              alt="#"
            />
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  );
}
