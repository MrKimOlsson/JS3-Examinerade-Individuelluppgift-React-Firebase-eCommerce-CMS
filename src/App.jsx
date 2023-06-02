import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { authReady } from './store/auth/authSlice'
import { ProtectedRoute } from './routes/ProtectedRoute';
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetails from './pages/productDetails/ProductDetails';
import Orders from './pages/orders/Orders';
import OrderDetails from './pages/orderDetails/OrderDetails';
import Users from './pages/users/Users';
import UserDetails from './pages/userDetails/UserDetails';
import Subscribers from './pages/subscribers/Subscribers';
import AddProduct from './pages/addProduct/AddProduct';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

const App = () => {

  // Extract the authIsReady value from the auth state in the Redux store
  const { authIsReady } = useSelector(state => state.auth)
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch()

  // Use the useEffect hook to listen for changes in the authentication state
  useEffect(() => {

    // When the authentication state changes, the onAuthStateChanged callback is triggered
    onAuthStateChanged(auth, (_user) => {
     
      // Declairs a user that is currently null
      let user = null

      // If _user is available, create a user object with uid and email properties
      if(_user) {
        user = {
          uid: _user.uid,
          email: _user.email
        }
      }

      // Dispatches the authReady action to update the auth state in the Redux store with the user object
      dispatch(authReady(user))

    })
  }, [])

  // Create a BrowserRouter using the createBrowserRouter function
  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
      // Route for the home page
      {
        index: true,
        element: <Home />,
      },
      // Route for the products page (protected route)
      {
        path: 'products',
        element: <ProtectedRoute><Products /></ProtectedRoute>,
      },
      // Route for product details page (protected route)
      {
        path: 'productDetails/:id',
        element: <ProtectedRoute><ProductDetails /></ProtectedRoute>,
      },
      // Route for the orders page (protected route)
      {
        path: 'orders',
        element: <ProtectedRoute><Orders /></ProtectedRoute>,
      },
      // Route for order details page (protected route)
      {
        path: 'orderDetails/:id',
        element: <ProtectedRoute><OrderDetails /></ProtectedRoute>,
      },
      // Route for the users page (protected route)
      {
        path: 'users',
        element: <ProtectedRoute><Users /></ProtectedRoute>,
      },
      // Route for user details page (protected route)
      {
        path: 'userDetails/:id',
        element: <ProtectedRoute><UserDetails /></ProtectedRoute>,
      },
      // Route for the subscribers page (protected route)
      {
        path: 'subscribers',
        element: <ProtectedRoute><Subscribers /></ProtectedRoute>,
      },
      // Route for adding a product (protected route)
      {
        path: 'addProduct',
        element: <ProtectedRoute><AddProduct /></ProtectedRoute>,
      },
      // Route for the registration page
      {
        path: 'register',
        element: <Register />
      },
      // Route for the login page
      {
        path: 'login',
        element: <Login />
      },
      ],
        
      
    },
  ]);
  // Render the RouterProvider component with the created router if authIsReady is true
  return (
    <>
      {
        authIsReady &&
        <RouterProvider router={router} />
      }
    </>
  );
};

export default App;