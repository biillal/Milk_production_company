import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const fetchCows = createAsyncThunk(
  "cows/fetchCows",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://milk-production-company-1.onrender.com/api/v1/cows");
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cows");
    }

  }
);

// Async thunk to create cow
export const createCow = createAsyncThunk(
  "post/create",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.post("http://localhost:5000/api/v1/cows/add", formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
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
    
    // create  cow
    builder.addCase(createCow.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCow.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(createCow.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
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
