import { TextField } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import {register} from '../actions'


const Registration = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Регистрация</div>
            <form className='loginPanelForm'>

                <div className='loginPanelTextFields'>
                    <TextField className='loginPanelInput' id='email' type='email' label='email'/>

                    <TextField className='loginPanelInput' id='name' type='text' label='Имя'/>

                    <TextField className='loginPanelInput' id='surname' type='text' label='Фамилия'/>

                    <TextField className='loginPanelInput' id='password' type='password' label='password'/>
                </div>

                <input className='submit input' type='submit' value='Зарегистрироваться' onClick={(e) => {
                    e.preventDefault();

                    let email = document.getElementById('email').value
                    let password = document.getElementById('password').value
                    let name = document.getElementById('name').value
                    let surname = document.getElementById('surname').value

                    console.log(props)

                    props.register(email, password, name, surname)     
                }}></input>

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
    { register }
)(Registration)

export {EnhancedRegistration as Registration} 