import React, { Fragment } from 'react'
import SideNav from "../../components/SideNav/SideNav"

class Layout extends React.Component{

  state = {
    showSidedrawer: false,
  }

  render() {
    return (
      <Fragment>
        <SideNav
          show = { this.state.showSidedrawer }
          toggle = { this.toggleSidedrawer }
          close = { this.sidedrawerCloseHandler }
        />

        <main>
          {this.props.children}
        </main>
      </Fragment>
    )
  }

  toggleSidedrawer = () => {
    this.setState((prevState) => {
      return { showSidedrawer: !prevState.showSidedrawer}
    })
  }

  sidedrawerCloseHandler = () => {
    this.setState({showSidedrawer: false})
  }
}

export default Layout