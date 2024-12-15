import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const fetchMilkProduction = createAsyncThunk(
  "milkProduction/fetchMilkProduction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/milk-production");
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cows");
    }

  }
);

// Async thunk to create milk-production
export const createMilkProduction = createAsyncThunk(
  "post/create",
  async (formData, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.post("http://localhost:5000/api/v1/milk-production/add", formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);

// Async thunk to update milk-production
export const updateMilkProduction = createAsyncThunk(
  "update/milkProduction",
  async ({formData,id}, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.put(`http://localhost:5000/api/v1/milk-production/update/${id}`, formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);
// Async thunk to delete milkProduction
export const deleteMilkProduction = createAsyncThunk(
  "delete/milkProduction",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      
      const response = await axios.delete(`http://localhost:5000/api/v1/milk-production/delete/${id}`);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);



const initialState = {
  milkProductions: [],
  message: "",
  error: "",
  loading:false
}

const milkProductionSlice = createSlice({
  name: 'cows',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // create  milkProduction
    builder.addCase(createMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(createMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // update  MilkProduction
    builder.addCase(updateMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(updateMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // delete  MilkProduction
    builder.addCase(deleteMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // get All cows
    builder.addCase(fetchMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.milkProductions = action.payload;
    });
    builder.addCase(fetchMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
}
});

export default milkProductionSlice.reducer;
