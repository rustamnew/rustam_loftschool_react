import React from 'react';
import {Login} from './Login'
import {Registration} from './Registration'


export class LoginPanel extends React.Component {
    state = {currentPanel: 'login'}

    switchButton = () => {
        if (this.state.currentPanel === 'login') {
            this.setState({currentPanel: 'registration'})
            
        }
        if (this.state.currentPanel === 'registration') {
            this.setState({currentPanel: 'login'})
            
        }
    }

    render() {
        const panels = {
            login: <Login switchButton={this.switchButton}/>,
            registration: <Registration switchButton={this.switchButton}/>
        }

        return <>
            <div className='loginPage'>
                <div className='loginPageLogo'></div>
                <div className='loginPageInputs'>
                    {panels[this.state.currentPanel]}
                </div>
            </div>
        </>
        
        
        
    }
}

export const LoginPanelWithAuth = LoginPanel

