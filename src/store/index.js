// import { configureStore } from '@reduxjs/toolkit'
// import productsSlice from '../store/products/productsSlice'
// import ordersSlice from './orders/ordersSlice'
// import usersSlice from './users/usersSlice'
// import authSlice from './auth/authSlice'
// import adminsSlice from './admins/adminsSlice'
// import rootReducer from './reducers'; // Import your root reducer



// export const store = configureStore(rootReducer)({
//   reducer: {
//     productList: productsSlice,
//     orderList: ordersSlice,
//     userList: usersSlice,
//     auth: authSlice,
//     adminList: adminsSlice,
//   }
// })

// import { configureStore } from '@reduxjs/toolkit';
// import productsSlice from '../store/products/productsSlice';
// import ordersSlice from './orders/ordersSlice';
// import usersSlice from './users/usersSlice';
// import authSlice from './auth/authSlice';
// import adminsSlice from './admins/adminsSlice';

// export const store = configureStore({
//   reducer: {
//     productList: productsSlice,
//     orderList: ordersSlice,
//     userList: usersSlice,
//     auth: authSlice,
//     adminList: adminsSlice,
//   }
// });


import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../store/products/productsSlice';
import ordersSlice from './orders/ordersSlice';
import usersSlice from './users/usersSlice';
import authSlice from './auth/authSlice';
import adminsSlice from './admins/adminsSlice';

export const store = configureStore({
  reducer: {
    productList: productsSlice,
    orderList: ordersSlice,
    userList: usersSlice,
    auth: authSlice,
    adminList: adminsSlice,
  }
});