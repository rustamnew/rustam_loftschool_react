import React from 'react';
import Map from './Map'
import {connect} from 'react-redux'
import {Address} from './Address'
import { Route } from 'react-router-dom';


const Home = (props) => {
    if (localStorage.cardOwnerName == true &&
        localStorage.cardNumber == true &&
        localStorage.cardDate == true &&
        localStorage.cardCVC == true) {
            let address = document.getElementById('address')
            console.log(address)
            address.style.display='flex'
    }    
    return <>
        <Route path='/main/home' component={Address}/>
        <Map />
    </>
}

const EnhancedHome = connect(
    null,
    {}
)(Home)

export {EnhancedHome as Home}