import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';
import plantsReducer from '../features/plants/plantsSlice';
import wishlistReducer from '../features/wishlist/wishlistSlice';
import authorisationReducer from '../features/authorisation/authorisationSlice';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    plants: plantsReducer,
    wishlist: wishlistReducer,
    authorisation: authorisationReducer,
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
