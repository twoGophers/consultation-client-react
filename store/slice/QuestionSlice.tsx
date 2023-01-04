import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

interface TypeForm {
    title: any,
    question: any,
}

export const postQuestionsHome = createAsyncThunk('auth/postQuestionsHome', async (params : TypeForm) => {
  const { data } = await axios.post('/questions/home', params);
  return data;
});

const initialState = {
  data: null,
};

const questionsHomeSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    questionHome: (state) => {
      state.data = null;
    },
  },
});

export const { questionHome } = questionsHomeSlice.actions;

export default questionsHomeSlice.reducer;