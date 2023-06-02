import React from 'react'
import useDoc from '../../hooks/useDoc'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'


const UserDetails = () => {
  // Accessing the 'id' parameter from the URL
  const { id } = useParams();

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
    <div className="my-5 py-5">
      <section className="text-center">
        <h2>{user.firstName + user.lastName}</h2>
        <div>
            <img src={user.profilePic} alt='Profile picture' className="img-fluid" />
        </div>
          <div className='flex-column'>
            {user.email}
            {user.streetName}
            {user.postalCode}
            {user.city}
        </div>
      </section>
    </div>
  )
}

export default UserDetails
