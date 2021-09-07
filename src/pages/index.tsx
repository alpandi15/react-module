import { Component } from 'react'
import { Switch } from 'react-router-dom'
import Header from '../components/layout/header'
import Routes from './Routes'
// import { Link } from 'react-router-dom'
export default class IndexPage extends Component {
  render () {
    return (
      <div>
        <Header />
        {/* <Routes /> */}
        <div>
          Halaman Pertama
        </div>
        <Switch>
          <Routes />
        </Switch>
      </div>
    )
  }
}
