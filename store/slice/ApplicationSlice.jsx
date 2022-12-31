import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchApplication = createAsyncThunk('auth/fetchApplication', async (params) => {
  const { data } = await axios.post('/auth/application', params);
  return data;
});

const initialState = {
  data: null,
};

const applicationSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
});

export const { logout } = applicationSlice.actions;

export default applicationSlice.reducer;

