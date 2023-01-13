import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Image from 'next/image';
import BinIcon from 'public/icons/binIcon.svg';
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
        toast.error('Product already is in the Wishlist.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        state.products.push(action.payload);
        toast.success('Product added to the Wishlist.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },

    removeFromWishlist: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((id) => id === action.payload) !== undefined) {
        state.products = state.products.filter((id) => id !== action.payload);
        toast.error('Product removed from the Wishlist.', {
          position: toast.POSITION.TOP_RIGHT,
          icon: <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />,
        });
      } else {
        toast.error('Product not found in the Wishlist.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
