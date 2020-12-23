import React from 'react';
import {Registration} from '../../components/LoginPage/Registration'
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../../store'

describe('Register', () => {
    it('render registration forms', () => {
        const container = render (
            <BrowserRouter>
                <Provider store={store}>
                    <Registration/>
                </Provider>
            </BrowserRouter>
        )
        let email = container.getByTestId('email')
        let name = container.getByTestId('name')
        let surname = container.getByTestId('surname')
        let password = container.getByTestId('password')

        let button = container.getByTestId('registerButton')
        expect(email).toBeTruthy()
        expect(password).toBeTruthy()
        expect(name).toBeTruthy()
        expect(surname).toBeTruthy()

        expect(button).toBeTruthy()
    })
})