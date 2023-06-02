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

// Create a test store using the configureStore function from Redux Toolkit
const testStore = configureStore({
  reducer: {
    // Define the reducers for different slices of state
    productList: productsSlice,
    orderList: ordersSlice,
    userList: usersSlice,
    auth: authSlice,
    adminList: adminsSlice,
  }
});

// Define a mock router component for testing
const MockRouter = () => {
  // Create a router configuration using createBrowserRouter from React Router
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Footer />
    }
  ]);

  // Render the component tree with the test store and router configuration
  return (
    <Provider store={testStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

// Test suite for the Footer component
describe('Footer', () => {
  // Test case: should include a paragraph
  it('should include a paragraph', () => {
    // Render the MockRouter component which includes the Footer component
    render(<MockRouter />);
    
    // Find the paragraph element with the specified text content
    const ptag = screen.getByText('© 2023 bmarketo. All rights reserved.');
    
    // Assert that the paragraph element is in the document
    expect(ptag).toBeInTheDocument();
  });
});
