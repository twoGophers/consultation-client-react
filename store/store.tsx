import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/ModalSlice';
import applicationSlice from './slice/ApplicationSlice';
 
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    application: applicationSlice
  },
})
