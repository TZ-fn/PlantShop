import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'types/types';

export interface WishlistState {
  products: Product['id'][];
}

const initialState: WishlistState = {
  products: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((id) => id === action.payload) !== undefined) {
        throw new Error('Product is already in the wishlist.');
      } else {
        state.products.push(action.payload);
      }
    },

    removeFromWishlist: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((id) => id === action.payload) !== undefined) {
        state.products = state.products.filter((id) => id !== action.payload);
      } else {
        throw new Error('Product not found in the wishlist.');
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
