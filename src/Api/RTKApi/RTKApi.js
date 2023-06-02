import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Api } from "../Api";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: Api }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => `product`,
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
