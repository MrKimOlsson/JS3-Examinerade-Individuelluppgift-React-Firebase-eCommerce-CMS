import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService";   // Import the users service

const initialState = {
  users: [],       // Initial state for the users array
  error: null,     // Initial state for the error (null indicates no error)
  loading: false   // Initial state for the loading status (false indicates not loading)
}

// Async action to add a user
export const addUser = createAsyncThunk('user-list/add', async (userData, thunkAPI) => {
  try {
    return await usersService.createUser(userData);   // Call the createUser function from the users service
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Async action to fetch all users
export const getUsers = createAsyncThunk('user-list/getAll', async (_, thunkAPI) => {
  try {
    return await usersService.getAllAsync('users');   // Call the getAllAsync function from the users service
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Create the user-list slice
export const usersSlice = createSlice({
  name: 'user-list',   // Name of the slice
  initialState,        // Use the initial state defined above
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;   // When addUser async action is pending, set loading state to true
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;             // When addUser async action is fulfilled, set loading state to false
        state.error = null;                // Clear any previous error
        state.users = [...state.users, action.payload];   // Add the new user to the users array
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;             // When addUser async action is rejected, set loading state to false
        state.error = action.payload;      // Set the error state to the rejected value (error message)
      })
      .addCase(getUsers.pending, (state) => {
        state.loading = true;   // When getUsers async action is pending, set loading state to true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;             // When getUsers async action is fulfilled, set loading state to false
        state.error = null;                // Clear any previous error
        state.users = action.payload;       // Set the users array to the received payload (array of users)
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;             // When getUsers async action is rejected, set loading state to false
        state.error = action.payload;      // Set the error state to the rejected value (error message)
      })
  }
});

export default usersSlice.reducer;   // Export the users reducer as the default export
