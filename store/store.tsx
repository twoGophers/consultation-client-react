import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slice/ModalSlice';
import applicationSlice from './slice/ApplicationSlice';
import navigationSlice from './slice/NavigationSlice';
import telegramBotSlice from './slice/TelegramSlice';
import questionsHomeSlice from './slice/QuestionSlice';
 
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    application: applicationSlice,
    navigation: navigationSlice,
    bot: telegramBotSlice,
    questions: questionsHomeSlice
  },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch