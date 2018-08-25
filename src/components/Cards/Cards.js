import React from 'react'
import github from '../../assets/img/git.png'
import linkedin from '../../assets/img/link.png'
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

  let photo, memberGithub, memberLinkedIn = null
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
          <a href={ github } >
            <img src={ github } alt="GitHub"/>
          </a>
          <a href={ linkedin } >
            <img src={ linkedin } alt="LinkedIn"/>
          </a>
        </div>
      </div>
    </div>
  ) 
}

export default Cards