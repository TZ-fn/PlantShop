import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import Image from 'next/image';
import BinIcon from 'public/icons/binIcon.svg';
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
        toast.success('Product added to the basket.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        state.products.push({ id: action.payload, quantity: 1 });
        toast.success('Product added to the basket.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    removeFromBasket: (state, action: PayloadAction<Product['id']>) => {
      if (state.products.find((product) => product.id === action.payload) !== undefined) {
        state.products = state.products.filter((product) => product.id !== action.payload);
        toast.error('Product removed from the basket.', {
          position: toast.POSITION.BOTTOM_CENTER,
          icon: <Image src={BinIcon.src} width={'40px'} height={'40px'} alt='' layout='fixed' />,
        });
      } else {
        toast.error('Product not found in the basket.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },

    changeQuantity: (state, action: PayloadAction<{ productId: string; count: number }>) => {
      if (state.products.find((product) => product.id === action.payload.productId)) {
        let productToChange = state.products.find(
          (product) => product.id === action.payload.productId,
        );
        productToChange!.quantity = action.payload.count;
      } else {
        toast.error('Product not found in the basket.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      }
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } = basketSlice.actions;

export default basketSlice.reducer;
