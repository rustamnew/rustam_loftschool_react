import React from "react"
import './App.css';

import {Home} from './components/Home'
import {Profile} from './components/Profile'
import {LoginPanel} from './components/LoginPanel'
import { Header } from "./components/Header";

import { connect } from 'react-redux'
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import {PrivateRoute} from './PrivateRoute'

class App extends React.Component {

  render() {
    return <>
      <main>
        <Route path='/main/' component={Header}/>
        
        <section className='section'>
          <Route exact path = '/' component={LoginPanel}/>
          <Route path = '/main/'  component={Home} />
          <PrivateRoute path = '/main/profile' component={Profile}/>
        </section>
      </main>
    </>;
  }
}

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);
