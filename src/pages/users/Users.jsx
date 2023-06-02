import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/users/usersSlice'
import Loader from '../../components/Loader/Loader'
import UserGrid from '../../components/users/userGrid/UserGrid'

const Users = () => {

  const dispatch = useDispatch() // Get the dispatch function from the Redux store

  useEffect(() => {
    dispatch(getUsers()) // Dispatch the getUsers action to fetch user data
  }, []) // Run this effect only once when the component mounts
  
  // Extract users, loading, and error from the Redux store state
  const { users, loading, error } = useSelector(state => state.userList) 


  return (

    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
        {
          users.length > 0
          ? users.map(user => <UserGrid key={user.id} user={user} />)
          : <h2>No users to show</h2>
        }
      </div>
    </div>
  )
}

export default Users

