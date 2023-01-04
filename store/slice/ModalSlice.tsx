import { createSlice } from '@reduxjs/toolkit'

interface TypeValue {
  show: boolean,
  admin: boolean,
  adminPanel: boolean
}

const initialState: TypeValue = {
  show: false,
  admin: false,
  adminPanel: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      state.show = action.payload;
    },
    showAdmin: (state, action) => {
      state.admin = action.payload;
    },
    showAdminPanel: (state, action) => {
      state.adminPanel = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { showModal, showAdmin, showAdminPanel } = modalSlice.actions;

export default modalSlice.reducer;