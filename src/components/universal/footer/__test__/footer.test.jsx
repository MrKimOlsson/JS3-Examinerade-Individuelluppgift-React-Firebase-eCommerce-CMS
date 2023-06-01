import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { it } from 'vitest';
import { render, screen } from "@testing-library/react";
import Footer from '../Footer';
import { configureStore } from '@reduxjs/toolkit';
import productsSlice from '../../../../store/products/productsSlice';
import ordersSlice from '../../../../store/orders/ordersSlice';
import usersSlice from '../../../../store/users/usersSlice';
import authSlice from '../../../../store/auth/authSlice';
import adminsSlice from '../../../../store/admins/adminsSlice';

const testStore = configureStore({
  reducer: {
    productList: productsSlice,
    orderList: ordersSlice,
    userList: usersSlice,
    auth: authSlice,
    adminList: adminsSlice,
  }
});

const MockRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Footer />
    }
  ]);

  return (
    <Provider store={testStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe('Navbar', () => {
  it('should include a paragraph', () => {
    render(<MockRouter />);
    const ptag = screen.getByText('© 2023 bmarketo. All rights reserved.');
    expect(ptag).toBeInTheDocument();
  });
});