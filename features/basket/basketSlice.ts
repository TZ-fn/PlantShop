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
    addToBasket: ({ products }, action: PayloadAction<Product['id']>) => {
      if (products.some((product) => product.id === action.payload)) {
        products.filter((product) => product.id === action.payload)[0].quantity++;
      } else {
        products.push({ id: action.payload, quantity: 1 });
      }
    },

    removeFromBasket: ({ products }, action: PayloadAction<Product['id']>) => {
      if (products.some((product) => product.id === action.payload)) {
        products.filter((product) => product.id === action.payload)[0].quantity--;
      } else {
        throw new Error('Product not found in the basket');
      }
    },

    changeQuantity: ({ products }, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } = basketSlice.actions;

export default basketSlice.reducer;
