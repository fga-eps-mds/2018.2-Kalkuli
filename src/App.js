import React, { Component } from 'react';
import './assets/sass/main.scss';
import Layout from './hoc/Layout/Layout'
import Header from './components/Header/Header'

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
        <Layout>
          <Header />
        </Layout>
      </div>
    )
  }

  renderMembers = () => {
    return 
  }
}

export default App;
