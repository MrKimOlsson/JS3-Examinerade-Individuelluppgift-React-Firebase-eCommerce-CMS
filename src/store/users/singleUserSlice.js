import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import usersService from "./usersService"

const initialState = {
  user: null,
  error: null,
  loading: false
}


export const getUserById = createAsyncThunk('singleUser/getById', async (id, thunkAPI) => {
  try {
    return await usersService.getByIdAsync(id)
  } catch (err) {
    console.log(err.message)
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const singleUserSlice = createSlice({
  name: 'singleUser',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false
        state.user = null
        state.error = action.payload
      })
  }
})


export const { clearUser } = singleUserSlice.actions

export default singleUserSlice.reducer