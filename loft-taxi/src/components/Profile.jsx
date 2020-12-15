import React from 'react'
import TextField from '@material-ui/core/TextField';
import profileLogo from '../img/profileLogo.png'
import cardIcon from '../img/cardIcon.png'

import {serverSendCard} from '../api'

export const Profile = (props) => {
    return <>
        <div className='profile'>
            <div className='modalBackground'>
                <div className='modal'>
                    <div className='modalTitle'>Профиль</div>
                    <div className='modalSubTitle'>Введите платёжные данные</div>

                    <div className='modalContent'>
                        <div className='modalInputs'>
                            <TextField className='modalInput' type='text' label='Имя владельца' id='cardOwnerName' defaultValue={localStorage.cardOwnerName}/>

                            <TextField className='modalInput' type='text' label='Номер карты' id='cardNumber' defaultValue={localStorage.cardNumber}/>

                            <div className='modalInputRow'>
                                <TextField className='modalInputSmall' type='text' label='MM/YY' id='cardDate' defaultValue={localStorage.cardDate}/>

                                <TextField className='modalInputSmall' type='number' label='CVC' id='cardCVC' defaultValue={localStorage.cardCVC}/>
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

                        serverSendCard(cardOwnerName, cardNumber, cardDate, cardCVC)
                    }}/>
                </div>
            </div>
        </div>
    </>
}