import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/types';

export interface BasketState {
  products: Product[];
}

const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },

    removeFromBasket: (state, action: PayloadAction<Product['id']>) => {
      state.products.filter((product) => product.id !== action.payload);
    },
    changeQuantity: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } = basketSlice.actions;

export default basketSlice.reducer;
