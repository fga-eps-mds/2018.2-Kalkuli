import React from 'react'

import Bernardo from '../../assets/img/Bernardo.jpeg'
import Clarissa from '../../assets/img/Clarissa.jpg'
import Esio from '../../assets/img/Esio.jpg'
import Felipe from '../../assets/img/Felipe.jpeg'
import Jaco from '../../assets/img/Jaco.jpeg'
import Lucas from '../../assets/img/Lucas.jpeg'
import Mariana from '../../assets/img/Mariana.jpeg'
import Pedro from '../../assets/img/Pedro.jpeg'
import Saleh from '../../assets/img/Saleh.png'
import Youssef from '../../assets/img/Youssef.jpeg'

const Cards = (props) => {

  let photo, github, linkedin = null
  switch (props.name) {
    case "Clarissa":
      photo = Clarissa
      break
    case "Ésio":
      photo = Esio
      break
    case "Bernardo":
      photo = Bernardo
      break
    case "Felipe":
      photo = Felipe
      break
    case "Jacó":
      photo = Jaco
      break
    case "Lucas":
      photo = Lucas
      break
    case "Mariana":
      photo = Mariana
      break
    case "Pedro":
      photo = Pedro
      break
    case "Saleh":
      photo = Saleh 
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