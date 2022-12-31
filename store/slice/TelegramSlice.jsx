import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = process.env.TOKEN_BOT_API;
const bot_id = process.env.TELEGRAM_BOT_ID;

export const fetchChatBot = createAsyncThunk('auth/fetchChatBot', async (params) => {
  console.log(token);
  console.log(bot_id);
  console.log(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&parse_mode=html&text=${params}`);
  const { bot } = await axios.post(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${bot_id}&parse_mode=html&text=${params}`,"r");
  return bot;
});

const initialState = {
  data: null,
};

const telegramBotSlice = createSlice({
  name: 'bot',
  initialState,
  reducers: {
    chatBot: (state) => {
      state.data = null;
    },
  },
});

export const { chatBot } = telegramBotSlice.actions;

export default telegramBotSlice.reducer;

