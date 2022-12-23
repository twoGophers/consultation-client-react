import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  show: false,
}

export const modalSlice = createSlice({
  name: 'modal',
  type: String,
  initialState: {
    show: false,
  },
  reducers: {
    showModal: (state, action) => {
      state.show = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal } = modalSlice.actions;

export default modalSlice.reducer;