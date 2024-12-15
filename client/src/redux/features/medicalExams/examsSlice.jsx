import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const fetchMedicalExams = createAsyncThunk(
  "medicalExams/fetchMedicalExams",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/medicalExam");
      return response.data;
    } catch (error) {      
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cows");
    }

  }
);

// Async thunk to create MedicalExam
export const createMedicalExam = createAsyncThunk(
  "post/medicalExam",
  async ({formData,Cow_number}, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.post(`http://localhost:5000/api/v1/medicalExam/cows/${Cow_number}/birth-records`, formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
        console.log(error);
              
      return rejectWithValue(error.response?.data?.errors[0].msg || "Failed to create cows");
    }
  }
);

// Async thunk to update MedicalExam
export const UpdateMedicalExam = createAsyncThunk(
  "update/medicalExam",
  async ({formData,id}, { rejectWithValue }) => {
    try {
      console.log(formData);
      
      const response = await axios.put(`http://localhost:5000/api/v1/medicalExam/update/${id}`, formData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);
// Async thunk to delete MedicalExam
export const deleteMedicalExam = createAsyncThunk(
  "delete/medicalExam",
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      
      const response = await axios.delete(`http://localhost:5000/api/v1/medicalExam/delete/${id}`);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      console.log(error);
      
      return rejectWithValue(error.response?.data?.message || "Failed to create cows");
    }
  }
);



const initialState = {
  medicalExams: [],
  message: "",
  error: "",
  loading:false
}

const medicalExamSlice = createSlice({
  name: 'medicalExams',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    // create  medical 
    builder.addCase(createMedicalExam.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createMedicalExam.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(createMedicalExam.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // update  medical
    builder.addCase(UpdateMedicalExam.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(UpdateMedicalExam.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(UpdateMedicalExam.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // delete  medical
    builder.addCase(deleteMedicalExam.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteMedicalExam.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    });
    builder.addCase(deleteMedicalExam.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
    // get All medicals
    builder.addCase(fetchMedicalExams.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMedicalExams.fulfilled, (state, action) => {
      state.loading = false;
      state.medicalExams = action.payload;
    });
    builder.addCase(fetchMedicalExams.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ;
    });
      
}
});

export default medicalExamSlice.reducer;
