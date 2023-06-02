import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./RTKApi/RTKApi";
import { Category } from "./RTKApi/GetCategoty";
import { smallCategory } from "./RTKApi/GetSmallCategory";

export default configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [Category.reducerPath]: Category.reducer,
    [smallCategory.reducerPath]: smallCategory.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      Category.middleware,
      smallCategory.middleware
    ),

  devTools: true,
});
