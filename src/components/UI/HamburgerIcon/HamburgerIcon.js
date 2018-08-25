import React from 'react'

const HamburgerIcon = (props) => {
  
  return(
    <div className={!props.show ? "menuButton" : null} onClick={props.click}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerIcon