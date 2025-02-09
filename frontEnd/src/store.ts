import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import productReducer from './features/products/productSlice';
import cartReducer from './features/cart/cartSlice';
import { apiSlice } from './features/api/apiSlice';
import {apiAuth} from './features/api/apiAuth'
export const store = configureStore({
  reducer: {
    [apiAuth.reducerPath]:apiAuth.reducer,
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(apiAuth.middleware),
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
