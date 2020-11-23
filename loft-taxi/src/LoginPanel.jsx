import React from 'react';
import {Login} from './Login'
import {Registration} from './Registration'

const panels = {
    login: <Login />,
    registration: <Registration />
}

let buttonText = 'Регистрация'


export class LoginPanel extends React.Component {
    state = {currentPanel: 'login'}

    render() {
        switch(this.state.currentPanel) {
            case 'login':
                return <>
                        <Login nav={this.props.nav}/>
                        
                        <button onClick={(e) => {

                                if (this.state.currentPanel === 'login') {
                                this.setState({currentPanel: 'registration'})
                                buttonText = 'Вход'
                            }
                                if (this.state.currentPanel === 'registration') {
                                this.setState({currentPanel: 'login'})
                                buttonText = 'Регистрация'
                            }

                            }}>{buttonText}</button>
                    </>
            case 'registration':
                return <>
                        <Registration nav={this.props.nav}/>
                        
                        <button onClick={(e) => {

                                if (this.state.currentPanel === 'login') {
                                this.setState({currentPanel: 'registration'})
                                buttonText = 'Вход'
                            }
                                if (this.state.currentPanel === 'registration') {
                                this.setState({currentPanel: 'login'})
                                buttonText = 'Регистрация'
                            }

                            }}>{buttonText}</button>
                    </>
        }
        
    }
}

