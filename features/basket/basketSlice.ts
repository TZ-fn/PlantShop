import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  products: [];
}

const initialState: CounterState = {
  products: [],
};

export const counterSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state) => {
      state.value += 1;
    },
    removeFromBasket: (state) => {
      state.value -= 1;
    },
    changeQuantity: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, changeQuantity } = counterSlice.actions;

export default counterSlice.reducer;
