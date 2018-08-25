import React, { Component } from 'react';
import './assets/CSS_SCSS/header.css';

class App extends Component {

  state = {
    members: [
      "Bernardo", "Clarissa", "Ésio", "Felipe",
      "Jacó", "Lucas", "Mariana", "Pedro", "Saleh", "Youssef"
    ],
  }

  render() {
    return (
      // <SideNav />
      // <Header />
      // <Resume />
      <div>
        <h1 className="title">EAEA</h1>
      </div>
    )
  }

  renderMembers = () => {
    return 
  }
}

export default App;
