import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserAuthorised: false,
};

export const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    updateAuthorisationStatus: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthorised = action.payload;
    },
  },
});

export const { updateAuthorisationStatus } = authorisationSlice.actions;

export default authorisationSlice.reducer;
