import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlantsData } from 'types/types';

export interface PlantsState {
  plantsData: PlantsData;
}

const initialState: PlantsState = {
  plantsData: [],
};

export const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    updatePlantsData: (state, action: PayloadAction<PlantsData>) => {
      // console.log(action.payload);
      state.plantsData = action.payload;
    },
  },
});

export const { updatePlantsData } = plantsSlice.actions;

export default plantsSlice.reducer;
