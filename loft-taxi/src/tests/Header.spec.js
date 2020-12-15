import React from 'react';
import {fireEvent, getByText, render} from '@testing-library/react'
import {Header} from "../components/header";

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../store'

describe('Header', ()=>{
    it('renders correctly', ()=>{
        const {container} = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Header/>
                </Provider>
            </BrowserRouter>
        )   
        expect(container.innerHTML).toMatch('Карта')
        expect(container.innerHTML).toMatch('Профиль')
        expect(container.innerHTML).toMatch('Выйти')
    })
})

