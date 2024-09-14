import { configureStore } from '@reduxjs/toolkit';

import filtersReducer from './filtersSlice';
import campersReducer from './campersSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
