import React from "react"
import './App.css';
import {Home} from './Home'
import {Profile} from './Profile'
import {LoginPanel, LoginPanelWithAuth} from './LoginPanel'
import { connect } from 'react-redux'
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import {PrivateRoute} from './PrivateRoute'
import { Header } from "./Header";

class App extends React.Component {

  render() {
    return <>

      <main>
        <Route path='/main/' component={Header}/>
        
        <section className='section'>
          <Route exact path = '/' component={LoginPanelWithAuth}/>
          <PrivateRoute path = '/main/'  component={Home} />
          <PrivateRoute path = '/main/profile' component={Profile}/>
        </section>
      </main>
    </>;
  }

}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
