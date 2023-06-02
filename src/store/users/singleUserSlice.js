import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService";   // Import the users service

const initialState = {
  user: null,       // Initial state for the user object
  error: null,      // Initial state for the error (null indicates no error)
  loading: false    // Initial state for the loading status (false indicates not loading)
}

// Async action to fetch a user by ID
export const getUserById = createAsyncThunk('singleUser/getById', async (id, thunkAPI) => {
  try {
    return await usersService.getByIdAsync(id);   // Call the getByIdAsync function from the users service
  } catch (err) {
    console.log(err.message);   // Log the error message to the console
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Create the singleUser slice
export const singleUserSlice = createSlice({
  name: 'singleUser',   // Name of the slice
  initialState,         // Use the initial state defined above
  reducers: {
    clearUser: (state) => {
      state.user = null;   // Reset the user object to null when clearUser action is dispatched
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;   // When getUserById async action is pending, set loading state to true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;             // When getUserById async action is fulfilled, set loading state to false
        state.user = action.payload;       // Set the user object to the received payload (user data)
        state.error = null;                // Clear any previous error
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;             // When getUserById async action is rejected, set loading state to false
        state.user = null;                 // Reset the user object to null
        state.error = action.payload;      // Set the error state to the rejected value (error message)
      })
  }
});

export const { clearUser } = singleUserSlice.actions;   // Extract the clearUser action

export default singleUserSlice.reducer;   // Export the singleUser reducer
