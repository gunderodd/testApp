import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function UserPage(props) {
  // this will set the initial state...this is like state as i was learning it
  const initialUserState = {
    user: {},
    loading: true,
  }

  // what is called the "getter" and "setter" for user state
  const [user, setUser] = useState(initialUserState)

  // this uses 'useEffect', which we imported, to get data from an API
  useEffect(() => {
    const getUser = async () => {
      // this passes the id that we are using for UserPage to the api??
      const { data } = await
axios(`https://api.github.com/users/${props.match.params.id}`)

      // this line updates the state, hopefully by changing not painting the clothes
      setUser(data)
    }

    // this invokes teh async funtion
    getUser()
  }, []) // the brackets stop this from running in an infinite loop, for some reason

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>

      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Followers</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.followers}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}