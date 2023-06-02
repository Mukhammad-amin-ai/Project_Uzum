import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import NotFound from "../Components/Common/NotFound";
import Favorites from "../Components/Favorites/Favorites";
import Shop from "../Components/Shop/Shop";
import FilterCategory from "../Components/FilterCategory";
import User from "../Components/Common/User/User";
import Product from "../Components/Product";

export default function router() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"favorite"} element={<Favorites />} />
      <Route path={"Shop"} element={<Shop />} />
      <Route path={"category/:id"} element={<FilterCategory />} />
      <Route path={"product/:id"} element={<Product />} />
      <Route path={"User"} element={<User />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
}
