import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, { payload }) {
       state.value = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;