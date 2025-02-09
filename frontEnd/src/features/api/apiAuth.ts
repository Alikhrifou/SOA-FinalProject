import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the Facture interface based on your backend variables.
interface IAuth {
  username: string,
  password: string
}
interface User {
  username: string;
  email: string;
  password: string;
  city: string;
  roles: string;
  adress: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
}

export const apiAuth = createApi({
  reducerPath: 'apiLogin',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8083/' }), // Replace with your actual base URL
  endpoints: (builder) => ({
    addUser: builder.mutation<User, Partial<User>>({
      query: (newUser) => ({
        url: 'auth/adduser',
        method: 'POST',
        body: newUser,
      }),

    }),
    // Endpoint to add a new facture.
    login: builder.mutation({
      query: ({ username, password }: IAuth) => ({
        url: 'auth/authenticate',
        method: 'POST',
        body: { username, password },
      }),
    }),
  }),
});

// Export hooks for usage in functional components.
export const { useLoginMutation,useAddUserMutation } = apiAuth;