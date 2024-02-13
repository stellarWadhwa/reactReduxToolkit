// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
  name: 'car',
  initialState: {
    value: 555,
  },
  reducers: {
    boughtCar: state => {
      state.value += 1;
    },
    soldCar: state => {
      state.value -= 1;
    },
  },
});

export const {boughtCar,soldCar} = carSlice.actions;

export default carSlice.reducer;
