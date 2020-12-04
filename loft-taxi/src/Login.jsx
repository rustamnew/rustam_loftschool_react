import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withAuth} from './AuthContext'


const Login = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Войти</div>
            <form className='loginPanelForm'>

                <div className='loginPanelTextFields'>
                    <TextField className='loginPanelInput' id='email' type='email' label='email'/>
        
                    <TextField className='loginPanelInput' id='password' type='password' label='password' />
                </div>
                
                <input className='submit input' type='submit' value='Войти' onClick={(e) => {
                    e.preventDefault();
                    let email = document.getElementById('email').value
                    let password = document.getElementById('password').value
                    props.logIn(email, password);
                    props.navigateTo('home')

                    console.log(email)
                    console.log(password)
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

const EnhancedLogin = withAuth(Login)

export {EnhancedLogin as Login}
