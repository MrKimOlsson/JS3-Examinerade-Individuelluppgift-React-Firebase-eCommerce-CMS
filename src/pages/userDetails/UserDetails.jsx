import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import useDoc from '../../hooks/useDoc'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

const UserDetails = () => {

  const { id } = useParams()
  const { data : user, error, loading } = useDoc('users', id)

  if(!user) return (
    <div>
      { loading && <Loader />}
      { error && <p>{error}</p>}
    </div>
  )

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



// import React from 'react'

// const UserDetails = ({user}) => {
//   return (
//     <div>
//       <img className="userGridImage" src={user.imageURL} alt="" />
//       <h3>{user.firstName + ' ' + user.lastName}</h3>
//       <p>{user.email}</p>
//       <p>{user.adress}</p>
//     </div>
//   )
// }

// export default UserDetails