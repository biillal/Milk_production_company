import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { toast } from 'react-toastify';

export const fetchbirth = createAsyncThunk(
    "birth/fetchbirth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("http://localhost:5000/api/v1/birthRecord/");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to fetch cows");
        }

    }
);

// Async thunk to create birth
export const createbirth = createAsyncThunk(
    "post/birth",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`http://localhost:5000/api/v1/birthRecord/add`, formData);
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message, {
                position: "top-center",
                autoClose: 3000,
            });
            return rejectWithValue(error.response?.data?.errors[0].msg || "Failed to create cows");
        }
    }
);

// Async thunk to update birth
export const Updatebirth = createAsyncThunk(
    "update/birth",
    async ({ formData, id }, { rejectWithValue }) => {
        try {

            const response = await axios.put(`http://localhost:5000/api/v1/birthRecord/update/${id}`, formData);

            return response.data;
        } catch (error) {

            return rejectWithValue(error.response?.data?.errors[0].msg || "Failed to create cows");
        }
    }
);
// Async thunk to delete birth
export const deletebirth = createAsyncThunk(
    "delete/birth",
    async (id, { rejectWithValue }) => {
        try {

            const response = await axios.delete(`http://localhost:5000/api/v1/birthRecord/delete/${id}`);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "Failed to create cows");
        }
    }
);



const initialState = {
    births: [],
    message: "",
    error: "",
    loading: false
}

const birthSlice = createSlice({
    name: 'births',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {

        // create  cow
        builder.addCase(createbirth.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(createbirth.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            toast.success(action.payload.message, {
                position: "top-center",
                autoClose: 3000,
            });
        });
        builder.addCase(createbirth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            toast.error(action.payload, {
                position: "top-center",
                autoClose: 3000,
            });
        });

        // update  birth
        builder.addCase(Updatebirth.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(Updatebirth.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            toast.success(action.payload.message, {
                position: "top-center",
                autoClose: 3000,
            });
        });
        builder.addCase(Updatebirth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            toast.error(action.payload, {
                position: "top-center",
                autoClose: 3000,
            });
        });

        // delete  birth
        builder.addCase(deletebirth.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(deletebirth.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            toast.success(action.payload.message, {
                position: "top-center",
                autoClose: 3000,
            });
        });
        builder.addCase(deletebirth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            toast.error(action.payload, {
                position: "top-center",
                autoClose: 3000,
            });
        });

        // get All birth
        builder.addCase(fetchbirth.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchbirth.fulfilled, (state, action) => {
            state.loading = false;
            state.births = action.payload;
        });
        builder.addCase(fetchbirth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

    }
});

export default birthSlice.reducer;
