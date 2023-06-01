import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ordersService from "./ordersService";

const initialState = {
  orders: [],
  error: null,
  loading: false
}

export const addOrder = createAsyncThunk('order-list/add', async (orderData, thunkAPI) => {
  try {
    return await ordersService.createOrder(orderData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const getOrders = createAsyncThunk('order-list/getAll', async (_, thunkAPI) => {
  try {
    return await ordersService.getAllAsync('orders')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const ordersSlice = createSlice({
  name: 'order-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOrder.pending, (state) => {
        state.loading = true
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.orders = [...state.products, action.payload]
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })



      .addCase(getOrders.pending, (state) => {
        state.loading = true
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.orders = action.payload
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default ordersSlice.reducer

