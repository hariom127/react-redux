import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/index'

function UserContainer({userData, fetchUsers}) {
    
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading 
    ? (<h2>Loading...</h2>
    ) :  userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
        <h1>User List</h1>
        <div>{userData && userData.users && userData.users.map(user => <p>{user.name}</p>)}
        </div>
        </div>
    ) 
}

const mapStateToProps = state => {
    return {
      userData: state.user
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUsers: () => dispatch(fetchUsers())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserContainer)