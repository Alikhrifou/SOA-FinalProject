import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Facture interface based on your backend variables.
export interface Facture {
  id: number;           
  clientId: number;     
  productIds: string;   
  totatAmount: number;  
  invoiceDate: string;  
  status: string;       
}


export const apiFacture = createApi({
  reducerPath: 'apiFacture',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }), // Replace with your actual base URL
  endpoints: (builder) => ({
    // Endpoint to fetch a list of factures.
    fetchFactures: builder.query<Facture[], void>({
      query: () => 'factures',
    }),
    // Endpoint to add a new facture.
    addFacture: builder.mutation<Facture, Partial<Facture>>({
      query: (newFacture) => ({
        url: 'factures',
        method: 'POST',
        body: newFacture,
      }),
    }),
  }),
});

// Export hooks for usage in functional components.
export const { useFetchFacturesQuery, useAddFactureMutation } = apiFacture;