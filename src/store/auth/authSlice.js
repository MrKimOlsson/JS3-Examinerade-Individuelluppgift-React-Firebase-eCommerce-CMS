import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"

// Initial state for the auth slice of the Redux store
const initialState = {
  user: null,
  loading: false,
  error: null,
  authIsReady: false
};

// Async thunk action creator to register a user
export const registerUser = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
  try {
    // Call the signup function from the authService to register the user
    return await authService.signup(formData.email, formData.password);
  } catch (err) {
    // If an error occurs, reject the promise with the error message
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Async thunk action creator to login a user
export const loginUser = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
  try {
    // Call the login function from the authService to log in the user
    return await authService.login(formData.email, formData.password);
  } catch (err) {
    // If an error occurs, reject the promise with the error message
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Async thunk action creator to logout a user
export const logoutUser = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Call the logout function from the authService to log out the user
    return await authService.logout();
  } catch (err) {
    // If an error occurs, reject the promise with the error message
    return thunkAPI.rejectWithValue(err.message);
  }
});

// Create a slice for the auth state
export const authSlice = createSlice({
  name: 'auth', // Name for the slice
  initialState, // Initial state
  reducers: {
    // Reducer to set the error state
    setError: (state, action) => {
      state.error = action.payload;
    },
    // Reducer to set the user and authIsReady state
    authReady: (state, action) => {
      state.user = action.payload;
      state.authIsReady = true;
    }
  },
  extraReducers: (builder) => {
    builder
    // Reducer cases for the pending, fulfilled, and rejected states of the registerUser async thunk
    .addCase(registerUser.pending, (state) => {
      state.loading = true; // Set loading state to true
    })
    .addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload; // Set the user state to the registered user
      state.loading = false; // Set loading state to false
      state.error = null; // Clear any previous error
    })
    .addCase(registerUser.rejected, (state, action) => {
      state.loading = false; // Set loading state to false
      state.error = action.payload; // Set the error to the rejected action payload (error message)
    })

    // Reducer cases for the pending, fulfilled, and rejected states of the loginUser async thunk
    .addCase(loginUser.pending, (state) => {
      state.loading = true; // Set loading state to true
    })
    .addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload; // Set the user state to the logged in user
      state.loading = false; // Set loading state to false
      state.error = null; // Clear any previous error
    })
    .addCase(loginUser.rejected, (state, action) => {
      state.loading = false; // Set loading state to false
      state.error = action.payload; // Set the error to the rejected action payload (error message)
    })
  }
})

export const { setError, authReady } = authSlice.actions

export default authSlice.reducer