import { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const Users = () => {
  return (
    <div>
      User Page
    </div>
  )
}

export default class Profile extends Component {
  render () {
    return (
      <div>
        <div>Profile</div>
        <div>
          <Link to="/profile/user">User</Link>
        </div>
        <Route path="/profile/user" component={Users} />
      </div>
    )
  }
}
