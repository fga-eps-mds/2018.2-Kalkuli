import React from 'react'
import "../../../assets/sass/main.scss"

const HamburgerIcon = (props) => (
  <div class="toggle-btn" onclick={props.toggle}>
    <span></span>
    <span></span>
    <span></span>
  </div>
)

export default HamburgerIcon