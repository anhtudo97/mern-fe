import { createSlice } from '@reduxjs/toolkit';

import { IHomePageState } from './types';

const initialState: IHomePageState = {
  topCars: [],
};

const HomePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setTopCars: (state, action) => {
      state.topCars = action.payload;
    },
  },
});

export const { setTopCars } = HomePageSlice.actions;
export default HomePageSlice.reducer;
