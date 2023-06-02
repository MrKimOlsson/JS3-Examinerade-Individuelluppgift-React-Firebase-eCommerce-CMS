import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../store/products/productsSlice';
import ordersSlice from './orders/ordersSlice';
import usersSlice from './users/usersSlice';
import authSlice from './auth/authSlice';
import adminsSlice from './admins/adminsSlice';
import subscriberSlice from './subscribers/subscribersSlice'

export const store = configureStore({
  reducer: {
    productList: productsSlice,        // Reducer for the product list state
    orderList: ordersSlice,            // Reducer for the order list state
    userList: usersSlice,              // Reducer for the user list state
    auth: authSlice,                   // Reducer for the authentication state
    adminList: adminsSlice,            // Reducer for the admin list state
    subscriberList: subscriberSlice    // Reducer for the subscriber list state
  }
});
