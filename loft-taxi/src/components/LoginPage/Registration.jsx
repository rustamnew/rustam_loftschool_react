import React from 'react';
import { connect } from 'react-redux';
import {authenticate, register} from '../../actions'
import TextField from '@material-ui/core/TextField';



const Registration = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Регистрация</div>

            <form className='loginPanelForm'>
                <div className='loginPanelTextFields'>
                    <TextField 
                    className='loginPanelInput' 
                    id='email' 
                    type='email' 
                    label='Email' 
                    data-testid='email'/>

                    <TextField 
                    className='loginPanelInput' 
                    id='name' 
                    type='text' 
                    label='Имя' 
                    data-testid='name'/>

                    <TextField 
                    className='loginPanelInput' 
                    id='surname' 
                    type='text' 
                    label='Фамилия' 
                    data-testid='surname'/>

                    <TextField 
                    className='loginPanelInput' 
                    id='password' 
                    type='password' 
                    label='Пароль' 
                    data-testid='password'/>
                </div>

                <input 
                className='submit input' 
                type='submit' 
                value='Зарегистрироваться' 
                data-testid='registerButton' 
                onClick={(e) => {
                    e.preventDefault()
                    let email = document.querySelector('#email').value
                    let name = document.querySelector('#name').value
                    let surname = document.querySelector('#surname').value
                    let password = document.querySelector('#password').value
                    props.register(email, password, name, surname)
                }}/>

                <div className ='panelSwitch'>
                    <div className='panelSwitchText'>Уже зарегестрированны?</div>
                    <button className='panelSwitchButton' data-testid="switchButton" onClick={(e) => {
                        e.preventDefault()
                        props.switchButton()
                    }}>Войти</button>
                </div>
            </form>
        </div>
    )
}

const EnhancedRegistration = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate, register }
)(Registration)

export {EnhancedRegistration as Registration} 