import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Form } from '../types';

interface FiltersState {
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  automatic: boolean;
  location: string;
  form: Form[];
}

const initialState: FiltersState = {
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  automatic: false,
  location: '',
  form: [],
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<Partial<FiltersState>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { changeFilter } = slice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default slice.reducer;
