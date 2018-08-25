import React, { Fragment } from 'react';
import '../../assets/sass/main.scss'
import HamburgerIcon from "../UI/HamburgerIcon/HamburgerIcon"
import Links from "../Links/Links"
import Backdrop from '../UI/Backdrop/Backdrop';

const SideNav = (props) => {

  let style = ["sidenav"]
    style = ["sidenav", "sidenav--active"]

  return (
    <Fragment>
      <Backdrop show={props.show} click={props.close}/>
      <div className={style.join(' ')}>
        <HamburgerIcon click={props.toggle}/>
        <Links />
      </div>
    </Fragment>
  )
  
}



export default SideNav