import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../api/api';
import { setPage } from './campersSlice';

interface FetchCampersParams {
  page: number;
  limit: number;
}

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (params: FetchCampersParams | undefined, thunkAPI) => {
    if (!params) {
      thunkAPI.dispatch(setPage(1));
    }

    try {
      const response = await getCampers(params);

      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
