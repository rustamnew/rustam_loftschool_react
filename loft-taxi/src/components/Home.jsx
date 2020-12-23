import React from 'react';
import {Map} from './Map'
import {connect} from 'react-redux'



const Home = (props) => {    
    return <>
        <Map/>
    </>
}

const EnhancedHome = connect(
    null,
    {}
)(Home)

export {EnhancedHome as Home}