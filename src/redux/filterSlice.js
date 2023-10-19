import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, { payload }) {
       state.value = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;