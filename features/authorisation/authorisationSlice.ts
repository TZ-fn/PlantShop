import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isUserAuthorised: false,
  username: '',
};

export const authorisationSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    updateAuthorisationStatus: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthorised = action.payload;
    },
    getUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { updateAuthorisationStatus, getUsername } = authorisationSlice.actions;

export default authorisationSlice.reducer;
