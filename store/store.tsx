import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/ModalSlice';
import applicationSlice from './slice/ApplicationSlice';
import navigationSlice from './slice/NavigationSlice';
 
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    application: applicationSlice,
    navigation: navigationSlice
  },
})
