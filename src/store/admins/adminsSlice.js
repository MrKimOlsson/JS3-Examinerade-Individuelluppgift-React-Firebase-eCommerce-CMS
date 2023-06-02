import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminsService from "./adminsService";


// Initial state for the admins slice of the Redux store
const initialState = {
  admins: [],
  error: null,
  loading: false
};

// Async thunk action creator to fetch admins data
export const getAdmins = createAsyncThunk('admin-list/getAll', async (_, thunkAPI) => {
  try {
    // Call the getAllAsync function from the adminsService to fetch admins data from Firestore
    return await adminsService.getAllAsync('admins');
  } catch (err) {
    // If an error occurs, reject the promise with the error message
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Create a slice for the admins state
export const adminsSlice = createSlice({
  name: 'order-list', // Name for the slice
  initialState, // Initial state
  reducers: {}, // Empty object for any additional reducers
  extraReducers: (builder) => {
    builder
      // Reducer case for the pending state of the getAdmins async thunk
      .addCase(getAdmins.pending, (state) => {
        state.loading = true; // Set loading state to true
      })
      // Reducer case for the fulfilled state of the getAdmins async thunk
      .addCase(getAdmins.fulfilled, (state, action) => {
        state.loading = false; // Set loading state to false
        state.error = null; // Clear any previous error
        state.admins = action.payload; // Update the admins array with the fetched data
      })
      // Reducer case for the rejected state of the getAdmins async thunk
      .addCase(getAdmins.rejected, (state, action) => {
        state.loading = false; // Set loading state to false
        state.error = action.payload; // Set the error to the rejected action payload (error message)
      });
  }
});

export default adminsSlice.reducer

