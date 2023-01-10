import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const postQuestionsHome = createAsyncThunk('questions/postQuestionsHome', async (params) => {
  const { data } = await axios.post('/questions/home', params);
  return data;
});
