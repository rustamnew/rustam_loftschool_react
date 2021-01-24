import React from 'react'
import {connect} from 'react-redux'
import {authenticate, address} from '../../actions'
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';




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
                    <TextField 
                    className='loginPanelInput' 
                    label='Email' 
                    type='email' 
                    data-testid='email'
                    id='email'
                    />
                    
                    <TextField 
                    className='loginPanelInput' 
                    label='Пароль'
                    type='password' 
                    data-testid='password'
                    id='password'
                    />
                </div>
                
                <input 
                className='submit input' 
                type='submit' 
                value='Войти' 
                data-testid='loginButton' 
                onClick={(e) => {
                    e.preventDefault()
                    let email = document.querySelector('#email').value
                    let password = document.querySelector('#password').value
                    props.authenticate(email, password)
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

