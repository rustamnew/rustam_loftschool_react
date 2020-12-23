import React from 'react'
import TextField from '@material-ui/core/TextField';
import profileLogo from '../img/profileLogo.png'
import cardIcon from '../img/cardIcon.png'

import {serverSendCard} from '../api'
import { Formik, Field } from 'formik';

export const Profile = (props) => {
    return <>
        <div className='profile'>
            <div className='modalBackground'>
                <div className='modal'>
                    <div className='modalTitle'>Профиль</div>
                    <div className='modalSubTitle'>Введите платёжные данные</div>

                    <Formik 
                        onSubmit={(value) => {
                            console.log(value)
                            serverSendCard(value.name, value.number, value.date, value.cvc)
                        }}

                        initialValues={{name: localStorage.cardOwnerName, number: localStorage.cardNumber, date: localStorage.cardDate, cvc: localStorage.cardCVC}}

                        validate={values => {
                            const errors = {
                                name: '',
                                number: '',
                                date: '',
                                cvc: ''
                            };

                            if (values.name.length < 1) {
                                errors.name = "Invalid";
                                return errors
                            } 
                            if (values.number.length < 16) {
                                errors.password = "Invalid"
                                return errors
                            }
                            if (!values.date.includes('/')) {
                                errors.date = 'Invalid'
                                return errors
                            }
                            if (values.cvc <= 2) {
                                errors.cvc = 'Invalid'
                                return errors
                            }
                        }}
                        
                        render={ ({ handleSubmit}) => {
                            return (
                                <form className='modalForm' onSubmit={handleSubmit}>
                                    <div className='modalContent'>
                                        <div className='modalInputs'>
                                            <label htmlFor='name'>name</label>
                                            <Field 
                                            className='modalInput' 
                                            name='name' 
                                            id='cardOwnerName' />

                                            <label htmlFor='number'>Cardnumber</label>
                                            <Field 
                                            className='modalInput' 
                                            name='number'
                                            id='cardNumber' />

                                            <div className='modalInputRow'>
                                                <label htmlFor='date'>date</label>
                                                <Field 
                                                className='modalInputSmall' 
                                                name='date'
                                                id='cardDate' />

                                                <label htmlFor='cvc'>cvc</label>
                                                <Field 
                                                className='modalInputSmall' 
                                                name='cvc'
                                                type='number' 
                                                id='cardCVC' />
                                            </div>
                                        </div>

                                        <div className='modalDisplay'>
                                            <div className='card'>
                                                <div className='cardRow'>
                                                    <img src={profileLogo}/>
                                                    <div className='cardDate'>{localStorage.cardDate}</div>
                                                </div>

                                                <div className='cardRow'>
                                                    <div className='cardNumber'>{localStorage.cardNumber}</div>
                                                </div>

                                                <div className='cardRow'>
                                                    <img src={cardIcon}/>
                                                    <div className='mastercardIcon'></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <input type='submit' id='submit' className='submit input' value='Сохранить' onClick={(e) => {
                                            let cardOwnerName = document.getElementById('cardOwnerName').value
                                            let cardNumber = document.getElementById('cardNumber').value
                                            let cardDate = document.getElementById('cardDate').value
                                            let cardCVC = document.getElementById('cardCVC').value
                                            localStorage.cardOwnerName = cardOwnerName
                                            localStorage.cardNumber = cardNumber
                                            localStorage.cardDate = cardDate
                                            localStorage.cardCVC = cardCVC
                                        }}/>
                                    
                                </form>
                            )
                        }}
                    />
                </div>
            </div>
        </div>
    </>
}