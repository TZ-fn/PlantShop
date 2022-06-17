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
    addToBasket: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((product) => product.id === action.payload) !== undefined) {
        state.products.filter((product) => product.id === action.payload)[0].quantity++;
      } else {
        state.products.push({ id: action.payload, quantity: 1 });
      }
    },

    removeFromBasket: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((product) => product.id === action.payload) !== undefined) {
        state.products = state.products.filter((product) => product.id !== action.payload);
      } else {
        throw new Error('Product not found in the basket.');
      }
    },

    changeQuantity: (state, action: PayloadAction<{ productId: string; count: number }>) => {
      if (state.products.find((product) => product.id === action.payload.productId)) {
        let productToChange = state.products.find(
          (product) => product.id === action.payload.productId,
        );
        productToChange!.quantity = action.payload.count;
      } else {
        throw new Error('Product not found in the basket.');
      }
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } = basketSlice.actions;

export default basketSlice.reducer;
