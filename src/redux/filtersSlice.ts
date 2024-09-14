import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const slice = createSlice({
  name: 'filters',
  initialState: {
    name: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state: RootState) => state.filters.name;

export default slice.reducer;
