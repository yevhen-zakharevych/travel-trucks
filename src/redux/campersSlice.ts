import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
import { RootState } from './store';
import { Camper } from '../types';

interface CampersState {
  items: Camper[];
  loading: boolean;
  error: string;
}

const initialState: CampersState = {
  items: [],
  loading: false,
  error: '',
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.items = [];
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.items = action.payload.items;
      })
      .addCase(fetchCampers.rejected, (state, error) => {
        state.loading = false;
        state.error = error.payload as string;
      });
  },
});

export const selectCampers = (state: RootState) => state.campers.items;
export const selectLoading = (state: RootState) => state.campers.loading;
export const selectError = (state: RootState) => state.campers.error;

export default slice.reducer;
