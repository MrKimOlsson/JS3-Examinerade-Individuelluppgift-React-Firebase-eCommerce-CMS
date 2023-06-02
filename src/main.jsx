import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

// Render the root component of the application to the 'root' element in the DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Enable strict mode for additional runtime checks in development
  <React.StrictMode>
    {/* Wrap the entire application with the Redux store provider */}
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>
);