import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  type: string;
  prix: number;
  description?: string;
  imageUrl?: string;
  
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
