import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <div>Profile</div>
        <div>
          <Link to="/profile/user">User</Link>
        </div>
      </div>
    )
  }
}
