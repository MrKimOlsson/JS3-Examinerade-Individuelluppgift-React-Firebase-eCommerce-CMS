import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ordersService from "./ordersService";

// Initial state for the orders slice of the Redux store
const initialState = {
  orders: [],    // Array to store the orders
  error: null,   // Variable to store any error that occurs
  loading: false // Flag to indicate if the orders are currently being loaded
}

// Thunk action creator to add an order
export const addOrder = createAsyncThunk('order-list/add', async (orderData, thunkAPI) => {
  try {
    return await ordersService.createOrder(orderData); // Call the createOrder function from the ordersService
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message); // If an error occurs, reject the action with the error message
  }
});

// Thunk action creator to get all orders
export const getOrders = createAsyncThunk('order-list/getAll', async (_, thunkAPI) => {
  try {
    return await ordersService.getAllAsync('orders'); // Call the getAllAsync function from the ordersService
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message); // If an error occurs, reject the action with the error message
  }
});

// Slice for the orders state in the Redux store
export const ordersSlice = createSlice({
  name: 'order-list', // Name of the slice
  initialState,      // Initial state for the slice
  reducers: {},      // No additional reducers defined
  extraReducers: (builder) => {
    builder
      // Reducer for the addOrder action
      .addCase(addOrder.pending, (state) => {
        state.loading = true; // Set loading to true while the order is being added
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;                          // Set loading to false
        state.error = null;                             // Clear any previous error
        state.orders = [...state.products, action.payload]; // Add the new order to the orders array
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false;           // Set loading to false
        state.error = action.payload;    // Set the error to the error message returned by the thunk
      })

      // Reducer for the getOrders action
      .addCase(getOrders.pending, (state) => {
        state.loading = true; // Set loading to true while the orders are being fetched
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false;        // Set loading to false
        state.error = null;           // Clear any previous error
        state.orders = action.payload; // Set the orders array to the fetched orders
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false;         // Set loading to false
        state.error = action.payload;  // Set the error to the error message returned by the thunk
      });
  }
});

export default ordersSlice.reducer

