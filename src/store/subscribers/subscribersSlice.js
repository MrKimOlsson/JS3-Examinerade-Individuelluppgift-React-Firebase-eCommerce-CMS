import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import subscribersService from "./subscribersService";   // Import the subscribers service

const initialState = {
  subscribers: [],     // Initial state for the subscribers array
  error: null,         // Initial state for the error (null indicates no error)
  loading: false       // Initial state for the loading status (false indicates not loading)
}

// Async action to add a new subscriber
export const addSubscriber = createAsyncThunk('subscriber-list/add', async (subscriberData, thunkAPI) => {
  try {
    return await subscribersService.createSubscriber(subscriberData);   // Call the createSubscriber function from the subscribers service
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Async action to fetch all subscribers
export const getSubscribers = createAsyncThunk('subscriber-list/getAll', async (_, thunkAPI) => {
  try {
    return await subscribersService.getAllAsync('subscribers');   // Call the getAllAsync function from the subscribers service
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Create the subscribers slice
export const subscribersSlice = createSlice({
  name: 'subscriber-list',   // Name of the slice
  initialState,             // Use the initial state defined above
  reducers: {},             // No additional reducers defined
  extraReducers: (builder) => {
    builder
      .addCase(addSubscriber.pending, (state) => {
        state.loading = true;   // When addSubscriber async action is pending, set loading state to true
      })
      .addCase(addSubscriber.fulfilled, (state, action) => {
        state.loading = false;                 // When addSubscriber async action is fulfilled, set loading state to false
        state.error = null;                    // Clear any previous error
        state.subscribers = [...state.subscribers, action.payload];   // Add the newly created subscriber to the subscribers array
      })
      .addCase(addSubscriber.rejected, (state, action) => {
        state.loading = false;           // When addSubscriber async action is rejected, set loading state to false
        state.error = action.payload;    // Set the error state to the rejected value (error message)
      })
      .addCase(getSubscribers.pending, (state) => {
        state.loading = true;   // When getSubscribers async action is pending, set loading state to true
      })
      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.loading = false;                 // When getSubscribers async action is fulfilled, set loading state to false
        state.error = null;                    // Clear any previous error
        state.subscribers = action.payload;    // Set the subscribers array to the received payload (array of subscribers)
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.loading = false;           // When getSubscribers async action is rejected, set loading state to false
        state.error = action.payload;    // Set the error state to the rejected value (error message)
      })
  }
});

export default subscribersSlice.reducer;   // Export the subscribers reducer
