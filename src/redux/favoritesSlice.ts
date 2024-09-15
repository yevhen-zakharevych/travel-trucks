import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface FavoritesState {
  items: string[];
}

const initialState: FavoritesState = {
  items: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    changeFavorites(state, action) {
      if (state.items.includes(action.payload)) {
        state.items = state.items.filter(item => item !== action.payload);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { changeFavorites } = slice.actions;

export const selectFavorites = (state: RootState) => state.favorites.items;

export default slice.reducer;
