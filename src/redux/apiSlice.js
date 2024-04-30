import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://dummyjson.com/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),
        getProductById: builder.query({
            query: (id) => `products/${id}`,
        }),
        addNewProduct: builder.mutation({
            query: (newProduct) => ({
              url: `/product/add`,
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: newProduct
            })
        }),
    }),
});

export const {useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation} = productsApi;