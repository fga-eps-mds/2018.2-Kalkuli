/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
//const Fragment = require('react');
const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}


/* CUSTOM COMPONENTS START */

const Header = () => {
  return (
    <div className="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Kalkuli</span>
          <span className="heading-primary--sub">de notas para dados</span>
        </h1>
      </div>
    </div>
  )
}

const Cards = (props) => {
  let photo, githubLink = null
  switch (props.name) {
    case "Clarissa":
      photo = siteConfig.Clarissa
      githubLink = siteConfig.ClarissaGithub
      break
    case "Ésio":
      photo = siteConfig.Esio
      githubLink = siteConfig.EsioGithub
      break
    case "Bernardo":
      photo = siteConfig.Bernardo
      githubLink = siteConfig.BernardoGithub
      break
    case "Felipe":
      photo = siteConfig.Felipe
      githubLink = siteConfig.FelipeGithub
      break
    case "Jacó":
      photo = siteConfig.Jaco
      githubLink = siteConfig.JacoGithub
      break
    case "Lucas":
      photo = siteConfig.Lucas
      githubLink = siteConfig.LucasGithub
      break
    case "Mariana":
      photo = siteConfig.Mariana
      githubLink = siteConfig.MarianaGithub
      break
    case "Pedro":
      photo = siteConfig.Pedro
      githubLink = siteConfig.PedroGithub
      break
    case "Saleh":
      photo = siteConfig.Saleh
      githubLink = siteConfig.SalehGithub
      break
    case "Youssef":
      photo = siteConfig.Youssef
      githubLink = siteConfig.YoussefGithub
      break
    default:
      break
  }
  return (
    <div className="card-foto">
      <img src={photo} alt={props.name} className="card-foto-perfil" />
      <div className="card-link">
        <p className="card-link-text">{props.name}</p>
        <div className="links">
          <a href={githubLink} >
            <img src={siteConfig.githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  )
}

/* CUSTOM COMPONENTS END*/


const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background} className="featuresContainer" >
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: '</p align="justify">O Kalkuli é um sistema que busca ajudar micro e pequenas empresas que precisem fazer controle de suas notas fiscais periodicamente de maneira rápida e prática.</p>\n\n Esta página contempla a documentação completa do projeto Kalkuli.',
        image: 'img/doc.png',
        imageAlign: 'top',
        title: 'Documentação',
      },
      {
        content: '</p align="justify">O projeto utiliza de microsserviços, onde cada serviço abrange uma funcionalidade do <i>software</i>. Dentro de cada repositório é possível encontrar instruções de configuração e execução.</p>\n\n Cada serviço possui seu próprio repositório, dentro da organização do <a href="https://github.com/Kalkuli">projeto</a>.',
        image: 'img/github.png',
        imageAlign: 'top',
        title: '<a href="https://github.com/Kalkuli">Repositórios</a>',
      },
    ]}
  </Block>
);


const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'Talk about learning how to use this',
        image: '',
        imageAlign: 'right',
        title: 'Learn How',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: '',
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="light">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: '',
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);



class Index extends React.Component {

  render() {
    const language = this.props.language || '';

    return (
      <React.Fragment>
        <Header />
          <Features />
          {/* <LearnHow />
          <TryOut /> */}
          {/* <Description /> */}
        <h1 className="heading-colaboradores">Colaboradores</h1>
          <div className="card-container">
            {siteConfig.members.map(member => <Cards key={member} name={member} />)}
          </div>
      </React.Fragment>
    );
  }
}

module.exports = Index;
