import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productsService from "./productsService";

// Define the initial state for the products slice
const initialState = {
  products: [],     // Array to store products
  error: null,      // Variable to store error messages (null indicates no error)
  loading: false    // Boolean flag to indicate if data is loading or not
}

// Async action to add a new product
export const addProduct = createAsyncThunk('product-list/add', async (productData, thunkAPI) => {
  try {
    return await productsService.createProduct(productData);   // Create a new product using productData
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Async action to fetch all products
export const getProducts = createAsyncThunk('product-list/getAll', async (_, thunkAPI) => {
  try {
    return await productsService.getAllAsync('products');   // Fetch all products from the server
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);   // If an error occurs, reject the promise with the error message
  }
});

// Create the products slice
export const productsSlice = createSlice({
  name: 'Product-list',    // Name of the slice
  initialState,            // Use the initial state defined above
  reducers: {},            // No additional reducers defined
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.pending, (state) => {
        state.loading = true;   // Set loading state to true when the addProduct async action is pending
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;                                  // Set loading state to false when the addProduct async action is fulfilled
        state.error = null;                                     // Clear any previous error
        state.products = [...state.products, action.payload];   // Add the newly created product to the products array
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;                    // Set loading state to false when the addProduct async action is rejected
        state.error = action.payload;             // Set the error state to the rejected value (error message)
      })
      .addCase(getProducts.pending, (state) => {
        state.loading = true;    // Set loading state to true when the getProducts async action is pending
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;                         // Set loading state to false when the getProducts async action is fulfilled
        state.error = null;                            // Clear any previous error
        state.products = action.payload;               // Set the products array to the received payload (array of products)
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;                 // Set loading state to false when the getProducts async action is rejected
        state.error = action.payload;          // Set the error state to the rejected value (error message)
      });
  }
});


export default productsSlice.reducer