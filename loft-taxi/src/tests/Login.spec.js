import React from 'react';
import {Login} from '../components/Login'
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../store'

describe('Login', () => {
    it('render login forms', () => {
        const container = render (
            <BrowserRouter>
                <Provider store={store}>
                    <Login/>
                </Provider>
            </BrowserRouter>
        )
        let email = container.getByLabelText('email')
        let password = container.getByLabelText('password')
        let button = container.getByTestId('loginButton')
        expect(email).toBeTruthy()
        expect(password).toBeTruthy()
        expect(button).toBeTruthy()
    })
})