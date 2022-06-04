import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';
import plantsReducer from '../features/plants/plantsSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    plants: plantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
