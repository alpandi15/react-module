import { Component } from 'react'
import Header from './header'

export default class LayoutDashboard extends Component {
  render () {
    const { children } = this.props
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    )
  }
}
