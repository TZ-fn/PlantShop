import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/types';

export interface WishlistState {
  products: Product[];
}

const initialState: WishlistState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((product) => product.id === action.payload) !== undefined) {
        state.products.filter((product) => product.id === action.payload)[0].quantity++;
      } else {
        state.products.push({ id: action.payload, quantity: 1 });
      }
    },

    removeFromWishlist: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((product) => product.id === action.payload) !== undefined) {
        state.products = state.products.filter((product) => product.id !== action.payload);
      } else {
        throw new Error('Product not found in the wishlist.');
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
