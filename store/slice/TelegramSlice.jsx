import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const token = process.env.NEXT_PUBLIC_TOKEN_BOT_API;
const bot_id = process.env.NEXT_PUBLIC_TELEGRAM_BOT_ID;

export const fetchChatBot = createAsyncThunk('auth/fetchChatBot', async (params) => {
  console.log(token);
  console.log(bot_id);
  console.log(`https://api.telegram.org/bot5912961863:AAG-LXjlL5ldZqjFWzghgpRjJ9uUoVU00cI/sendMessage?chat_id=998384982&parse_mode=html&text=${params}`);
  const { bot } = await axios.post(`https://api.telegram.org/bot5912961863:AAG-LXjlL5ldZqjFWzghgpRjJ9uUoVU00cI/sendMessage?chat_id=998384982&parse_mode=html&text=${params}`,"r");
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

