import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axiosConfig';
export const createNoteThunk = createAsyncThunk(
  'createNote/createNoteThunk',
  async ({ taskId, newNote }, { rejectWithValue, getState }) => {
    try {
      const token = getState().getToken.token;
      const config = {
        Headers: {
          authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post(
        `notes/${taskId}/create-note`,
        newNote,
        config
      );
      return response.data.message;
    } catch (error) {
      console.log(error);
      const message =
        error.response?.data?.message || error.message || 'Falied to fetch';
      return rejectWithValue(message);
    }
  }
);

const createNoteSlice = createSlice({
  name: 'createNote',
  initialState: {
    status: 'idle',
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createNoteThunk.pending, state => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createNoteThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload; 
      })
      .addCase(createNoteThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default createNoteSlice.reducer;
