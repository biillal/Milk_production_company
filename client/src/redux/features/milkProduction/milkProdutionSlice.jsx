import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { toast } from 'react-toastify';

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
      const response = await axios.post("http://localhost:5000/api/v1/milk-production/add", formData);
      
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response?.data?.errors[0].msg || "Failed to create cows");
    }
  }
);

// Async thunk to update milk-production
export const updateMilkProduction = createAsyncThunk(
  "update/milkProduction",
  async ({formData,id}, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/milk-production/update/${id}`, formData);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.errors[0].msg || "Failed to create cows");
    }
  }
);
// Async thunk to delete milkProduction
export const deleteMilkProduction = createAsyncThunk(
  "delete/milkProduction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/v1/milk-production/delete/${id}`);
      
      return response.data;
    } catch (error) {
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
  name: 'milkProduction',
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
      toast.success(action.payload.message, {
        position: "top-center",
        autoClose: 3000,
      });
    });
    builder.addCase(createMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
      toast.error(action.payload, {
        position: "top-center",
        autoClose: 3000,
      });
    });
      
    // update  MilkProduction
    builder.addCase(updateMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      toast.success(action.payload.message, {
        position: "top-center",
        autoClose: 3000,
      });
    });
    builder.addCase(updateMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
      toast.error(action.payload, {
        position: "top-center",
        autoClose: 3000,
      });
    });
      
    // delete  MilkProduction
    builder.addCase(deleteMilkProduction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteMilkProduction.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      toast.success(action.payload.message, {
        position: "top-center",
        autoClose: 3000,
      });
    });
    builder.addCase(deleteMilkProduction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
      toast.error(action.payload, {
        position: "top-center",
        autoClose: 3000,
      });
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
