import React from 'react';
import {connect} from 'react-redux'
import {route} from '../actions'

import carStandart from '../img/carStandart.png'
import carPremium from '../img/carPremium.png'
import carBusiness from '../img/carBusiness.png'

import { useHistory } from "react-router-dom";

const Address = (props) => {
    const history = useHistory();
    console.log(localStorage.addresses)
    let addressesArray = localStorage.addresses.split(',')
    let addressFormNode
    let select1
    let select2
    
    const addressForm = (element) => {
        addressFormNode = element
        select1 = document.querySelector('#select1')
        select2 = document.querySelector('#select2')

        for (let address of addressesArray) {
            let option = document.createElement('option')
            option.className='selectorItem'
            option.innerHTML= address
            select1.append(option)
        }
        for (let address of addressesArray) {
            let option = document.createElement('option')
            option.className='selectorItem'
            option.innerHTML= address
            select2.append(option)
        }
        select1.value = ''
        select2.value = ''
        
        if (!localStorage.cardOwnerName ||
            !localStorage.cardNumber ||
            !localStorage.cardDate ||
            !localStorage.cardCVC) {
                let address = document.querySelector('#address')
                let form = document.querySelector('#addressForm')
                form.classList.add('disabled')

                let elem = document.createElement('div')
                elem.classList.add('cardInfoRequire')

                let text = document.createElement('div')
                text.classList.add('cardInfoText')
                text.innerHTML = 'Заполните платежные данные'
                address.append(text)

                let button = document.createElement('input')
                button.setAttribute('type', 'submit')
                button.classList.add('input')
                button.classList.add('submit')
                button.classList.add('cardInfoButton')
                button.setAttribute('value', 'Перейти в профиль')
                button.onclick = function (e) {
                    history.push('/main/profile')
                }
                elem.append(text)
                elem.append(button)

                address.append(elem)

        }
    }
    
    const addressFilter = (e) => {
        let selectId = e.currentTarget.id
        let value = e.currentTarget.value
        let wasEmpty

        let filteredArray = addressesArray.filter(address => address !== value)
        console.log(filteredArray)

        switch (selectId) {
            case 'select1':
                if (select2.value === '') {
                    wasEmpty = true
                } else {
                    value = select1.value
                }
                select2.innerHTML = ''
                    for (let address of filteredArray) {
                        let option = document.createElement('option')
                        option.className='selectorItem'
                        option.innerHTML= address
                        select2.append(option)
                    }
                    if(wasEmpty) {
                        select2.value = ''  
                        wasEmpty = false
                    } else {
                        select1.value = value
                    }
                break
            case 'select2':
                if (select1.value === '') {
                    wasEmpty = true
                } else {
                    value = select1.value
                }
                select1.innerHTML = ''
                    for (let address of filteredArray) {
                        let option = document.createElement('option')
                        option.className='selectorItem'
                        option.innerHTML= address
                        select1.append(option)
                    }
                    if(wasEmpty) {
                        select1.value = ''  
                        wasEmpty = false
                    } else {
                        select1.value = value
                    }
                break
        }
    }

    let selectCar = (e) => {
        if (e.classList.contains('active')) {
            e.classList.remove('active')
            return
        }
        let cards = document.querySelectorAll('.carCard')
        cards.forEach(e => e.classList.remove('active'))
        e.classList.add('active')
    }

    return <>
        <div className='address' id='address'>
            <form id='addressForm' ref={addressForm} className='addressForm'>
                <div className='selectors' id='selectors'>
                    <div className="selectors__row">
                        <label className='selectorLabel' htmlFor="select1">Откуда:</label>
                        <select className='selector' id='select1' form='addressForm' onChange={(e) => {addressFilter(e)}} data-testid='select1'/>
                    </div>
                    <div className="selectors__row">
                        <label className='selectorLabel' htmlFor="select2">Куда:</label>
                        <select className='selector' id='select2' form='addressForm' onChange={(e) => {addressFilter(e)}} data-testid='select2'/>
                    </div>
                </div>
            
                <ul className='carsList'>
                    <li className='carCard active standart' onClick={(e) => selectCar(e.currentTarget)}>
                        <div className='carTitle'>Стандарт</div>

                        <div className='carPricePanel'>
                            <div className='carPriceTitle'>Стоимость</div>
                            <div className='carPrice'>150Р</div>
                        </div>

                        <div className='carPicture'>
                            <img className='carImage' src={carStandart}/>
                        </div>
                    </li>

                    <li className='carCard business' onClick={(e) => selectCar(e.currentTarget)}>
                        <div className='carTitle'>Премиум</div>

                        <div className='carPricePanel'>
                            <div className='carPriceTitle'>Стоимость</div>
                            <div className='carPrice'>250Р</div>
                        </div>

                        <div className='carPicture'>
                            <img className='carImage' src={carPremium}/>
                        </div>
                    </li>

                    <li className='carCard premium' onClick={(e) => selectCar(e.currentTarget)}>
                        <div className='carTitle'>Бизнес</div>

                        <div className='carPricePanel'>
                            <div className='carPriceTitle'>Стоимость</div>
                            <div className='carPrice'>300Р</div>
                        </div>

                        <div className='carPicture'>
                            <img className='carImage' src={carBusiness}/>
                        </div>
                    </li>
                </ul>

                <input className='order submit input' type='submit' value='Заказать' onClick={(e) => {
                    e.preventDefault();
                    let address1 = document.querySelector('#select1').value
                    let address2 = document.querySelector('#select2').value
                    props.route(address1, address2)
                    if (address1 && address2) {
                        let waitForBuildRoute = () => {
                            if (localStorage.route) {
                                console.log(JSON.parse(localStorage.route))
                                props.drawLine(JSON.parse(localStorage.route))

                            } else {
                                console.log('loading')
                                setTimeout(waitForBuildRoute, 1000)
                            }
                        }
                        setTimeout(waitForBuildRoute, 1000)
                    }
                }}/>
            </form>
        </div>
    </>
}

const EnhancedAddress = connect(
    null,
    {route}
)(Address)

export {EnhancedAddress as Address}

