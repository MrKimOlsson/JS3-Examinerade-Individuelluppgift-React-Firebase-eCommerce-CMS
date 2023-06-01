import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ordersService from "./ordersService"

const initialState = {
  product: null,
  error: null,
  loading: false
}


export const getOrderById = createAsyncThunk('singleOrder/getById', async (id, thunkAPI) => {
  try {
    return await ordersService.getByIdAsync(id)
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const singleOrderSlice = createSlice({
  name: 'singleOrder',
  initialState,
  reducers: {
    clearOrder: (state) => {
      state.order = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderById.pending, (state) => {
        state.loading = true
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload
        state.error = null
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.loading = false
        state.order = null
        state.error = action.payload
      })
  }
})


export const { clearOrder } = singleOrderSlice.actions

export default singleOrderSlice.reducer