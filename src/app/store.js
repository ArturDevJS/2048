import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../boardSlice';

export const store = configureStore({
  reducer: {
    counterMy: counterReducer,
    board: boardReducer,
  },
});
