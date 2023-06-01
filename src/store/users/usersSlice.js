import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import usersService from "./usersService";

const initialState = {
  users: [],
  error: null,
  loading: false
}

export const addUser = createAsyncThunk('user-list/add', async (userData, thunkAPI) => {
  try {
    return await usersService.createUser(userData)
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})
export const getUsers = createAsyncThunk('user-list/getAll', async (_, thunkAPI) => {
  try {
    return await usersService.getAllAsync('users')
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})


export const usersSlice = createSlice({
  name: 'user-list',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.users = [...state.users, action.payload]
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })



      .addCase(getUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export default usersSlice.reducer

