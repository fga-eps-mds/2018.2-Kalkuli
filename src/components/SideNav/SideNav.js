import React, { Fragment } from 'react';
import '../../assets/sass/main.scss'
import HamburgerIcon from "../UI/HamburgerIcon/HamburgerIcon"
import Links from "../Links/Links"

const SideNav = (props) => {

  let style = [".sidenav", "sidenav--close"]
  if(props.show)
    style = [".sidenav", "sidenav--open"]

  return (
    <Fragment>
      <nav>
        <HamburgerIcon />
        <Links />
      </nav>
    </Fragment>
  )
  
}



export default SideNav