import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const fetchCows = createAsyncThunk(
  "cows/fetchCows",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/cows");
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cows");
    }

  }
);



const initialState = {
  cows: [],
  message: "",
  error: "",
  loading:false
}

const cowSlice = createSlice({
  name: 'cows',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get All cows
    builder.addCase(fetchCows.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCows.fulfilled, (state, action) => {
      state.loading = false;
      state.cows = action.payload;
    });
    builder.addCase(fetchCows.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
}
});

export default cowSlice.reducer;
