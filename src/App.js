import React, { Component } from 'react';
import SideNav from './components/SideNav/SideNav'
import './assets/sass/main.scss';

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
        <SideNav />
      </div>
    )
  }

  renderMembers = () => {
    return 
  }
}

export default App;
