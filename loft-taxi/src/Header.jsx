import React from 'react';
import Button from '@material-ui/core/Button';


export const Header = (props) => {
    return (
        <header className='header'>
            <nav className='header__nav'>
                <ul className='header__nav-list'>
                    <li>
                    <Button className='nav__button' onClick={() => {
                        props.navigateTo('home')
                    }}>Карта</Button>
                    </li>

                    <li>
                    <Button className='nav__button' onClick={() => {
                        props.navigateTo('profile')
                    }}>Профиль</Button>
                    </li>

                    <li>
                    <Button className='nav__button' onClick={() => {
                        props.navigateTo('loginPanel')
                    }}>Выйти</Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}