import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCampers } from '../api/api';

export const fetchCampers = createAsyncThunk(
  'campers/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await getCampers();

      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
