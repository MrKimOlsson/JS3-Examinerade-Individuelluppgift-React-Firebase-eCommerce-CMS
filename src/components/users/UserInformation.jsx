import React from 'react'
import useDoc from '../../hooks/useDoc';
import Loader from '../Loader/Loader';

const UserInformation = ({order}) => {

  const id = order.userId
  // Retrieving the user data, error, and loading state using a custom hook called 'useDoc'
  const { data: user, error, loading } = useDoc('users', id);

  // If the user data is not available, render a loader and an error message
  if (!user) {
    return (
      <div>
        {/* Display a loader if the data is still loading */}
        {loading && <Loader />}
        {/* Display an error message if there is an error */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  return (
    <div>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Street name: {user.streetName}</p>
      <p>Zip code: {user.postalCode}</p>
      <p>City: {user.city}</p>
      <p>Phone: {user.mobile}</p>
      
    </div>
  )
}

export default UserInformation