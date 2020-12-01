import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const Login = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Войти</div>
            <form className='loginPanelForm'>
                <TextField className='email input' id='email' type='email' label='email'/>
        
                <TextField className='password input' id='password' type='password' label='password' />
        
                <input className='submit input' type='submit' value='Войти' onClick={(e) => {
                    e.preventDefault();
                    props.navigateTo('home')
                }}/>
                <button className='panelSwitch button' onClick={(e) => {
                    e.preventDefault()
                    props.switchButton()
                }}>Регистрация</button>
            </form>
        </div>
    )
}
