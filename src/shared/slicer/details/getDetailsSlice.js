import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axiosConfig';

export const getDetailsThunk = createAsyncThunk(
  'details/getDetailsThunk',
  async (id, { rejectWithValue, getState }) => {
    try {
      const token = getState().getToken.token;
      const config = {
        Headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.get(
        `details/${id}/get-details`,
        config
      );
      return response.data;
    } catch (error) {
      const message = error.message || 'Failed to fetch';
      return rejectWithValue(message);
    }
  }
);

const getDetailsSlice = createSlice({
  name: 'details',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getDetailsThunk.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getDetailsThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getDetailsThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default getDetailsSlice.reducer;
