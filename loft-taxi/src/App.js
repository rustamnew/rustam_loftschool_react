import React from "react"
import './App.css';
import {Home} from './Home'
import {Profile} from './Profile'
import {LoginPanel} from './LoginPanel'
import {Header} from './Header'



class App extends React.Component {

  

  state = {currentPage: 'loginPanel'}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    const pages = {
      home: <Home/>,
      profile: <Profile/>,
      loginPanel: <LoginPanel />,
    }

    if (this.state.currentPage == 'loginPanel') {
      return <LoginPanel navigateTo = {this.navigateTo}/>
    } 
    return <>
      <Header navigateTo={this.navigateTo}/>

      <main>
        <section>
            {pages[this.state.currentPage]}
        </section>
      </main>
    </>;
  }

  
}

export default App;
