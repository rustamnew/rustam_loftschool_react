import React from "react"
import './App.css';
import {Home} from './Home'
import {Profile} from './Profile'
import {LoginPanel, LoginPanelWithAuth} from './LoginPanel'
import {Header} from './Header'
import {withAuth} from './AuthContext'

class App extends React.Component {

  state = {currentPage: 'loginPanel'}

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page})
    } else {
      this.setState({currentPage: 'loginPanel'})
    }
    
  }

  render() {
    const pages = {
      home:(props) => <Home {... props}/>,
      profile:(props) => <Profile {... props}/>,
      loginPanel:(props) => <LoginPanelWithAuth {... props}/>,
    }

    if (this.state.currentPage == 'loginPanel') {
      return <LoginPanel navigateTo = {this.navigateTo}/>
    } 
    return <>
      <Header navigateTo={this.navigateTo}/>

      <main>
        <section>
            {pages[this.state.currentPage]({navigateTo: this.navigateTo})}
        </section>
      </main>
    </>;
  }

}

export default withAuth(App);
