import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { Api } from "../Api";

export const Category = createApi({
  reducerPath: "Category",
  baseQuery: fetchBaseQuery({ baseUrl:"/api" }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: () => `navbar`,
    }),
  }),
});
export const { useGetCategoryQuery } = Category;
