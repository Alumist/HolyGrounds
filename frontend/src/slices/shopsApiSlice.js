import { SHOPS_URL, VOTESHOPS_URL } from '../constants';
import { apiSlice } from './apiSlice';

//The injectEndpoints function is used to add new endpoints to an existing API slice.
//The getShops endpoint is added to the shopsApiSlice.
//The getShops endpoint is a query endpoint that fetches data from the SHOPS_URL.
//url: SHOPS_URL is passed as an argument to the query function.
export const shopsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getShops: builder.query({
      query: () => ({
        url: SHOPS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getShopIndividual: builder.query({
      query: (shopId) => ({
        url: `${SHOPS_URL}/${shopId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getShopVotes: builder.query({
      query: (shopId) => ({
        url: `${VOTESHOPS_URL}/${shopId}/votes`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetShopsQuery, useGetShopIndividualQuery, useGetShopVotes } = shopsApiSlice;
