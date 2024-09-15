import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './campersOps';
import { RootState } from './store';
import { Camper, Transmission } from '../types';
import { selectFilters, selectLocation } from './filtersSlice';

interface CampersState {
  items: Camper[];
  loading: boolean;
  error: string;
  total: number;
  page: number;
}

const initialState: CampersState = {
  items: [],
  loading: false,
  error: '',
  total: 0,
  page: 1,
};

const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.total = action.payload.total;

        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
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
export const selectTotal = (state: RootState) => state.campers.total;
export const selectPage = (state: RootState) => state.campers.page;
export const selectCampersLength = (state: RootState) =>
  state.campers.items.length;

export const selectFilteredCampers = createSelector(
  [selectCampers, selectFilters, selectLocation],
  (campers, filter, location) => {
    let filteredCampers = [...campers];

    if (filter.AC) {
      filteredCampers = filteredCampers.filter(camper => camper.AC);
    }

    if (filter.bathroom) {
      filteredCampers = filteredCampers.filter(camper => camper.bathroom);
    }

    if (filter.kitchen) {
      filteredCampers = filteredCampers.filter(camper => camper.kitchen);
    }

    if (filter.TV) {
      filteredCampers = filteredCampers.filter(camper => camper.TV);
    }

    if (filter.automatic) {
      filteredCampers = filteredCampers.filter(
        camper => camper.transmission === Transmission.Automatic
      );
    }

    if (location) {
      filteredCampers = filteredCampers.filter(camper =>
        camper.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (filter.form.length > 0) {
      filteredCampers = filteredCampers.filter(camper =>
        filter.form.includes(camper.form)
      );
    }

    return filteredCampers;
  }
);

export const { setPage } = slice.actions;

export default slice.reducer;
