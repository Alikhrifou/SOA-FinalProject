import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: string;
  type: string;
  description?: string;
  reference?: string;
  imageUrl?: string;
  prix: number;
  clientId?: number;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/' }), // Replace with your API base URL
  endpoints: (builder) => ({
    fetchProducts: builder.query<Product[], void>({
      query: () => 'produits',
    }),
    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: 'produits',
        method: 'POST',
        body: newProduct,
      }),
      
    }),
    deleteProduct: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `produits/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useAddProductMutation,useDeleteProductMutation } = apiSlice;
