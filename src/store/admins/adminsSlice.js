import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import adminsService from "./adminsService";

const initialState = {
  admins: [],
  error: null,
  loading: false
}

export const getAdmins = createAsyncThunk('admin-list/getAll', async (_, thunkAPI) => {
  try {
    return await adminsService.getAllAsync('admins')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

export const adminsSlice = createSlice({
  name: 'order-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

    .addCase(getAdmins.pending, (state) => {
      state.loading = true
    })
    .addCase(getAdmins.fulfilled, (state, action) => {
      state.loading = false
      state.error = null
      state.admins = action.payload
    })
    .addCase(getAdmins.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
  }
})

export default adminsSlice.reducer

