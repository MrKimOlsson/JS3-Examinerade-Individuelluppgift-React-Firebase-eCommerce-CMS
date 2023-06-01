import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/users/usersSlice'
import Loader from '../../components/Loader/Loader'
import UserGrid from '../../components/users/userGrid/UserGrid'

const Users = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

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
          // <ProductGrid key={products._id} products={products} />
        }
      </div>
    </div>
    // <div className='user-wrapper'>
    //   <div className='user-container'>

    //     { loading && <p>Loading...</p> }
    //     { error && <p>{error}</p> }

    //     {
    //       users.length > 0
    //       ? users.map(user => <UserGrid key={user.id} user={user} />)
    //       : <h2>No users to show</h2>
    //     }
        
        
    //   </div>
    // </div>
  )
}

export default Users

// import React from 'react'
// import { useState } from 'react'
// import { useFetch } from "../../hooks/useFetch"
// import './users.css'
// import UserListItem from '../../components/userListItem/UserListItem'

// const Users = () => {


//     const [url, setUrl] = useState('http://localhost:9999/api/user')
//     const { data: users, loading, error } = useFetch(url, { method: 'GET' })
  
//     return (
  
//       <div className='user-wrapper'>
//           <div className='user-container'>
  
//           { loading && <p>Loading...</p> }
//           { error && <p>{error}</p> }
  
//           { users && !loading && !error && users.map(user => (
//             <UserListItem key={user._id} user={user} />
//           ))}
          
//         </div>
//       </div>
//     )
//   }

// export default Users