import React, { Fragment } from 'react';
import HamburgerIcon from "../UI/HamburgerIcon/HamburgerIcon"
import Links from "../Links/Links"
import Backdrop from '../UI/Backdrop/Backdrop';

const SideNav = (props) => {

  let style = ["sidenav"]
  if(props.show)
    style = ["sidenav", "sidenav--active"]

  return (
    <Fragment>
      <Backdrop show={props.show} click={props.close}/>
      <div className={style.join(' ')}>
        <HamburgerIcon show={props.show} click={props.toggle}/>
        <Links />
      </div>
    </Fragment>
  )
}

export default SideNav