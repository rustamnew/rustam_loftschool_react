import React from "react"
import './App.css';
import {Home} from './Home'
import {Profile} from './Profile'
import {LoginPanel} from './LoginPanel'
import {Login} from './Login'

const pages = {
  home: <Home/>,
  profile: <Profile/>,
  loginPanel: <LoginPanel />,
}



class App extends React.Component {

  state = {currentPage: 'loginPanel'}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render() {
    if (this.state.currentPage == 'loginPanel') {
      return <LoginPanel nav = {this.navigateTo}/>
    } else
    return <>
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={() => {
                this.navigateTo('home')
              }}>Карта</button>
            </li>

            <li>
              <button onClick={() => {
                this.navigateTo('profile')
              }}>Профиль</button>
            </li>

            <li>
              <button onClick={() => {
                this.navigateTo('loginPanel')
              }}>Выйти</button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
            {pages[this.state.currentPage]}
        </section>
      </main>
    </>;
  }

  
}

export default App;
//{pages[this.state.currentPage]}