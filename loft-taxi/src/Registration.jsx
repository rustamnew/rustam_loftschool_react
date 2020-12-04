import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';


export const Registration = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Регистрация</div>
            <form className='loginPanelForm'>

                <div className='loginPanelTextFields'>
                    <TextField className='loginPanelInput' id='email' type='email' label='email'/>

                    <TextField className='loginPanelInput' id='name' type='text' label='Как вас зовут'/>

                    <TextField className='loginPanelInput' id='password' type='password' label='password'/>
                </div>

                <input className='submit input' type='submit' value='Зарегистрироваться' onClick={(e) => {
                    e.preventDefault();
                    props.navigateTo('home')
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