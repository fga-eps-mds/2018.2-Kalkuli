/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
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
  return(
    <div className="header">
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">pdf2</span>
					<span className="heading-primary--sub">knowledge</span>
				</h1> 
			</div>
		</div>
  )
}

const Cards = (props) => {
  let photo, memberGithub, memberLinkedIn = null
  switch (props.name) {
    case "Clarissa":
      photo = siteConfig.Clarissa
      break
    case "Ésio":
      photo = siteConfig.Esio
      break
    case "Bernardo":
      photo = siteConfig.Bernardo
      break
    case "Felipe":
      photo = siteConfig.Felipe
      break
    case "Jacó":
      photo = siteConfig.Jaco
      break
    case "Lucas":
      photo = siteConfig.Lucas
      break
    case "Mariana":
      photo = siteConfig.Mariana
      break
    case "Pedro":
      photo = siteConfig.Pedro
      break
    case "Saleh":
      photo = siteConfig.Saleh 
      break   
    case "Youssef":
      photo = siteConfig.Youssef
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
          <a href='google.com' >
            <img src={siteConfig.githubIcon} alt="GitHub"/>
          </a>
          <a href='google.com' >
            <img src={siteConfig.linkedinIcon} alt="LinkedIn"/>
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
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: '',
        imageAlign: 'top',
        title: 'Feature One',
      },
      {
        content: 'The content of my second feature',
        image: '',
        imageAlign: 'top',
        title: 'Feature Two',
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
  <Block background="dark">
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
      <div> 
        <Header />
        <div className="mainContainer">
          <div className="card-container">
            {siteConfig.members.map(member => <Cards key={member} name={member}/>)}
          </div>
          <Features />
          <LearnHow />
          <TryOut />
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
