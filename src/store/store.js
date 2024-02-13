// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../features/carSlice/carSlice';

export const reduxStore = configureStore({
  reducer: {
    car:carSlice
  },
});
