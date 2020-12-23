import { TextField } from '@material-ui/core';
import { Formik, Field } from 'formik';
import React from 'react';
import { connect } from 'react-redux';

import {register} from '../../actions'


const Registration = (props) => {
    return (
        <div className='loginPanel'>
            <div className='panelTitle'>Регистрация</div>
            <Formik
                onSubmit={(value) => {
                    console.log(value)
                    props.register(value.email, value.password , value.name, value.surname) 
                }}

                validate={values => {
                    const errors = {
                        email: '',
                        password: '',
                        name: '',
                        surname: ''
                    };

                    if (!values.email.includes("@")) {
                        errors.email = "Invalid";
                        return errors
                    } 
                    if (!values.name) {
                        errors.name = 'Invalid'
                        return errors
                    }
                    if (!values.surname) {
                        errors.surname = 'Invalid'
                        return errors
                    }
                    if (values.password.length <= 5) {
                        errors.password = "Invalid"
                        return errors
                    }
                }}

                render={ ({ handleSubmit}) => {
                    return (
                        <form className='loginPanelForm' onSubmit={handleSubmit}>

                            <div className='loginPanelTextFields'>
                                <Field className='loginPanelInput' id='email' type='email' name='email' data-testid='email'/>

                                <Field className='loginPanelInput' id='name' type='text' name='name' data-testid='name'/>

                                <Field className='loginPanelInput' id='surname' type='text' name='surname' data-testid='surname'/>

                                <Field className='loginPanelInput' id='password' type='password' name='password' data-testid='password'/>
                            </div>

                            <input className='submit input' type='submit' value='Зарегистрироваться' data-testid='registerButton'/>

                            <div className ='panelSwitch'>
                                <div className='panelSwitchText'>Уже зарегестрированны?</div>
                                <button className='panelSwitchButton' data-testid="switchButton" onClick={(e) => {
                                    e.preventDefault()
                                    props.switchButton()
                                }}>Войти</button>
                            </div>
                        </form>
                    )
                }}
            />
            
        </div>
    )
}

const EnhancedRegistration = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { register }
)(Registration)

export {EnhancedRegistration as Registration} 