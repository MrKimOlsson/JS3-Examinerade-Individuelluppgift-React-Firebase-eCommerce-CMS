import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
  // Extract the user object from the auth state in the Redux store
  const { user } = useSelector(state => state.auth);

  // If user is not available, redirect to the login page using the <Navigate> component from React Router
  if (!user) return <Navigate to='/login' />;

  // If user is available, render the children components
  return user
    ? children
    : <Navigate to="/login" replace state={{ from: location.pathname }} />;
}
