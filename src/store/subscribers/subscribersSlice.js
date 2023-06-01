import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import subscribersService from "./subscribersService";

const initialState = {
  subscribers: [],
  error: null,
  loading: false
}

export const addSubscriber = createAsyncThunk('subscriber-list/add', async (subscriberData, thunkAPI) => {
  try {
    return await subscribersService.createSubscriber(subscriberData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const getSubscribers = createAsyncThunk('subscriber-list/getAll', async (_, thunkAPI) => {
  try {
    return await subscribersService.getAllAsync('subscribers')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const subscribersSlice = createSlice({
  name: 'subscriber-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubscriber.pending, (state) => {
        state.loading = true
      })
      .addCase(addSubscriber.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.subscribers = [...state.subscribers, action.payload]
      })
      .addCase(addSubscriber.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })



      .addCase(getSubscribers.pending, (state) => {
        state.loading = true
      })
      .addCase(getSubscribers.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.subscribers = action.payload
      })
      .addCase(getSubscribers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default subscribersSlice.reducer

