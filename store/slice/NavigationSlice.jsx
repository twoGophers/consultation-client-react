import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nav: false,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  type: String,
  initialState,
  reducers: {
    showNavigation: (state, action) => {
      state.nav = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;