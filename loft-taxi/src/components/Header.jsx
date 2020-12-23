import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { logOut } from '../actions'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li>
                    <Button component={ Link } to="/main/home" className='nav__button'>Карта</Button>
                    </li>

                    <li>
                    <Button component={ Link } to="/main/profile" className='nav__button' >Профиль</Button>
                    </li>

                    <li>
                    <Button component={ Link } to="/" className='nav__button' onClick={() => {
                        console.log(props)
                        props.logOut()
                    }}>Выйти</Button>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}

const EnhancedHeader = connect(
    null,
    { logOut }
)(Header)

export {EnhancedHeader as Header}