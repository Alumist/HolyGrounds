import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Shops', 'newShop', 'voteShop'],
  endpoints: (builder) => ({
    getShops: builder.query({
      query: () => '/api/shops',
    }),
    addShop: builder.mutation({
      query: (shop) => ({
        url: '/api/shops/add',
        method: 'POST',
        body: shop,
      }),
    }),
    voteShop: builder.mutation({
      query: (shop) => ({
        url: '/api/shops/vote',
        method: 'POST',
        body: shop,
      }),
    }),
  }),
});
