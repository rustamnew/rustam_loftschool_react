import React from 'react';
import {connect} from 'react-redux'
import {route} from '../actions'

import carStandart from '../img/carStandart.png'
import carPremium from '../img/carPremium.png'
import carBusiness from '../img/carBusiness.png'

let token = 'pk.eyJ1IjoicnVzdGFtbmV3IiwiYSI6ImNraTA5ajg2eTBpaGQyc3Frc3Q4eDl1YmMifQ.f62dquorxx35MBx07qc8-g'


const Address = (props) => {
    let addressesArray = localStorage.addresses.split(',')
    let addressFormNode
    let select1
    let select2
    
    const addressForm = (element) => {
        addressFormNode = element
        select1 = addressFormNode.children.selectors.children.select1
        select2 = addressFormNode.children.selectors.children.select2

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
    }

    const addressFilter = (e) => {
        let array1 = localStorage.addresses.split(',')
        let array2 = localStorage.addresses.split(',')
        let wasEmpty
        let value

        switch(e.target.id) {
            case 'select1':
                array2 = localStorage.addresses.split(',')
                
                for (let i = 0; i < addressesArray.length; i++){
                    if(select1.value == array2[i] && select1.value !== '') {
                        if (select2.value == '') {
                            wasEmpty = true
                        } else {
                            value = select1.value
                        }
                        array2.splice(i, 1)
                        select2.innerHTML = ''
                        for (let address of array2) {
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
                    }
                }
                break
            case 'select2': 
                array1 = localStorage.addresses.split(',')
                
                for (let i = 0; i < addressesArray.length; i++){
                    if(select2.value == array1[i] && select2.value !== '') {
                        if (select1.value == '') {
                            wasEmpty = true
                        } else {
                            value = select1.value
                        }
                        array1.splice(i, 1)
                        select1.innerHTML = ''
                        for (let address of array1) {
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
                break
            
        }
    }

    return <>
        <div className='address' id='address'>
            <form id='addressForm' ref={addressForm} onChange={(e) => {addressFilter(e)}} className='addressForm'>
                <div className='selectors' id='selectors'>
                    <select className='selector' id='select1' form='addressForm'/>
                    <select className='selector' id='select2' form='addressForm'/>
                </div>
            
                <ul className='carsList'>
                    <li className='carCard standart'>
                        <div className='carTitle'>Стандарт</div>

                        <div className='carPricePanel'>
                            <div className='carPriceTitle'>Стоимость</div>
                            <div className='carPrice'>150Р</div>
                        </div>

                        <div className='carPicture'>
                            <img className='carImage' src={carStandart}/>
                        </div>
                    </li>

                    <li className='carCard business'>
                        <div className='carTitle'>Премиум</div>

                        <div className='carPricePanel'>
                            <div className='carPriceTitle'>Стоимость</div>
                            <div className='carPrice'>250Р</div>
                        </div>

                        <div className='carPicture'>
                            <img className='carImage' src={carPremium}/>
                        </div>
                    </li>

                    <li className='carCard premium'>
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
                    fetch(`https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=${token}`)
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

