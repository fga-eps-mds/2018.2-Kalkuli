import React from 'react'
import Bernardo from '../../assets/img/Bernardo.jpeg'
import Youssef from '../../assets/img/youssef.jpeg'
const Cards = (props) => {

  let photo, github, linkedin = null
  switch (props.name) {

    case "Bernardo":
      photo = Bernardo
      break
    case "Youssef":
      photo = Youssef
      break
  
    default:
      break
  }

  return(
    
    <div className="card-foto">
      <img src={ photo } alt={ props.name } className="card-foto-perfil"/>
      <div className="card-link">
        <p className="card-link-text">{ props.name }</p>
        <div className="links">
          <a href={ github } target="_blank">
            <img src="assets/img/git.png" alt="GitHub"/>
          </a>
          <a href={ linkedin } target="_blank">
            <img src="assets/img/link.png" alt="GitHub" className="card-link-segundo"/>
          </a>
        </div>
      </div>
    </div>
  ) 

}

export default Cards