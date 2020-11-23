import React from 'react';

export const Header = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                    <button onClick={() => {
                        props.navigateTo('home')
                    }}>Карта</button>
                    </li>

                    <li>
                    <button onClick={() => {
                        props.navigateTo('profile')
                    }}>Профиль</button>
                    </li>

                    <li>
                    <button onClick={() => {
                        props.navigateTo('loginPanel')
                    }}>Выйти</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}