import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class IndexPage extends Component {
  render () {
    return (
      <div>
        Halaman Home
        <div>
          <ul>
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
