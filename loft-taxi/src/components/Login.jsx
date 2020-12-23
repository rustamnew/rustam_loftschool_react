import React from 'react'
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import {authenticate, address} from '../actions'
import { useHistory } from "react-router-dom";



const Login = (props) => {
    
    const history = useHistory();

    props.address()

    let func = () => {
        if (props.isLoggedIn === true) {
            document.cookie = 'token=AUTH_TOKEN'
            history.push('/main/home')
            clearInterval(interval)
        }
    }
    let interval = setInterval(func, 1000)
    

    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Войти</div>
            <form className='loginPanelForm'>

                <div className='loginPanelTextFields'>
                    <TextField className='loginPanelInput' id='email' type='email' label='email'/>
        
                    <TextField className='loginPanelInput' id='password' type='password' label='password' />
                </div>
                
                <input className='submit input' type='submit' value='Войти' data-testid='loginButton' onClick={(e) => {
                    e.preventDefault();
                    let email = document.getElementById('email').value
                    let password = document.getElementById('password').value
                    props.authenticate(email, password);
                }}/>
                
                <div className ='panelSwitch'>
                    <div className='panelSwitchText'>Новый пользователь?</div>
                    <button className='panelSwitchButton' data-testid="switchButton" onClick={(e) => {
                        e.preventDefault()
                        props.switchButton()
                    }}>Регистрация</button>
                </div>
                
            </form>
        </div>
    )
}

const EnhancedLogin = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate, address }
)(Login)

export {EnhancedLogin as Login}
