import React from 'react';
import {Login} from './Login'
import {Registration} from './Registration'



let buttonText = 'Регистрация'


export class LoginPanel extends React.Component {
    state = {currentPanel: 'login'}

    switchButton = () => {
        if (this.state.currentPanel === 'login') {
            this.setState({currentPanel: 'registration'})
            buttonText = 'Вход'
        }
        if (this.state.currentPanel === 'registration') {
            this.setState({currentPanel: 'login'})
            buttonText = 'Регистрация'
        }
    }

    render() {
        const panels = {
            login: <Login navigateTo={this.props.navigateTo} switchButton={this.switchButton}/>,
            registration: <Registration navigateTo={this.props.navigateTo} switchButton={this.switchButton}/>
        }

        return <>
            {panels[this.state.currentPanel]}
        </>
        
    }
}

