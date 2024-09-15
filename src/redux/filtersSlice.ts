import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Form } from '../types';

interface FiltersState {
  filters: {
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    automatic: boolean;
    form: Form | null;
  };
  location: string;
}

const initialState: FiltersState = {
  filters: {
    AC: false,
    bathroom: false,
    kitchen: false,
    TV: false,
    automatic: false,
    form: null,
  },
  location: '',
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    changeLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { changeFilter, changeLocation } = slice.actions;

export const selectFilters = (state: RootState) => state.filters.filters;
export const selectLocation = (state: RootState) => state.filters.location;

export default slice.reducer;
