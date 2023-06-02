import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Api } from "../Api";

export const smallCategory = createApi({
  reducerPath: "smallCategory",
  baseQuery: fetchBaseQuery({ baseUrl: Api}),
  endpoints: (build) => ({
    getTheme:build.query({
        query:() =>`themes`,
    }),
  }),
});
export const { useGetThemeQuery } = smallCategory;
