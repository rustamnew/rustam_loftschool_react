import React from 'react'
import profileLogo from '../img/profileLogo.png'
import cardIcon from '../img/cardIcon.png'

import {serverSendCard} from '../api'
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";


export const Profile = (props) => {
    const history = useHistory();
    
    return <>
        <div className='profile'>
            <div className='modalBackground'>
                <div className='modal'>
                    <div className='modalTitle'>Профиль</div>

                    <div className='modalSubTitle'>Введите платёжные данные</div>

                    <form className='modalForm' onSubmit={serverSendCard()}>
                        <div className='modalContent'>
                            <div className='modalInputs'>
                                <TextField 
                                className='modalInput' 
                                label='Имя' 
                                id='cardOwnerName'
                                defaultValue={localStorage.cardOwnerName} />

                                <TextField 
                                className='modalInput' 
                                label='Номер карты'
                                id='cardNumber' 
                                defaultValue={localStorage.cardNumber}/>

                                <div className='modalInputRow'>
                                    <TextField
                                    className='modalInputSmall' 
                                    label='ММ/ГГ'
                                    id='cardDate' 
                                    defaultValue={localStorage.cardDate}/>

                                    <TextField 
                                    className='modalInputSmall' 
                                    label='CVC'
                                    type='password'
                                    id='cardCVC' 
                                    defaultValue={localStorage.cardCVC}/>
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
                                e.preventDefault()
                                let cardOwnerName = document.getElementById('cardOwnerName').value
                                let cardNumber = document.getElementById('cardNumber').value
                                let cardDate = document.getElementById('cardDate').value
                                let cardCVC = document.getElementById('cardCVC').value
                                localStorage.cardOwnerName = cardOwnerName
                                localStorage.cardNumber = cardNumber
                                localStorage.cardDate = cardDate
                                localStorage.cardCVC = cardCVC
                                history.push('/main/home')
                            }}/>
                        
                    </form>
                </div>
            </div>
        </div>
    </>
}