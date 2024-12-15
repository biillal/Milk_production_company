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

// Async thunk to update cow
export const updateCow = createAsyncThunk(
  "update/cow",
  async ({formData,id}, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.put(`http://localhost:5000/api/v1/cows/update/${id}`, formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);
// Async thunk to delete cow
export const deleteCow = createAsyncThunk(
  "delete/cow",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      
      const response = await axios.delete(`http://localhost:5000/api/v1/cows/delete/${id}`);
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
      console.log(action.payload);
      
    });
      
    // update  cow
    builder.addCase(updateCow.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCow.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(updateCow.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // delete  cow
    builder.addCase(deleteCow.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCow.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteCow.rejected, (state, action) => {
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
