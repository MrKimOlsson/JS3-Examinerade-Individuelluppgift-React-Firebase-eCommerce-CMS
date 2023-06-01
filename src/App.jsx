import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/config'
import { authReady } from './store/auth/authSlice'
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

  const { authIsReady } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (_user) => {
     
      let user = null

      if(_user) {
        user = {
          uid: _user.uid,
          email: _user.email
        }
      }

      dispatch(authReady(user))

    })
  }, [])

  const router = createBrowserRouter([
    {
      
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'products',
          element: <Products />,
        },
        {
          path: 'productDetails/:id',
          element: <ProductDetails />,
        },
        {
          path: 'orders',
          element: <Orders />,
        },
        {
          path: 'orderDetails/:id',
          element: <OrderDetails />,
        },
        {
          path: 'users',
          element: <Users />,
        },
        {
          path: 'userDetails/:id',
          element: <UserDetails />,
        },
        {
          path: 'subscribers',
          element: <Subscribers />,
        },
        {
          path: 'addProduct',
          element: <AddProduct />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: 'login',
          element: <Login />
        },
      ],
        
      
    },
  ]);

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