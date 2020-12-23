import React from 'react';
import {Address} from '../components/Address'
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../store'

describe('Address', () => {
    it('address filter', () => {
        localStorage.addresses = 'Пулково (LED),Эрмитаж,Кинотеатр Аврора,Мариинский театр'
        const container = render (
            <BrowserRouter>
                <Provider store={store}>
                    <Address/>
                </Provider>
            </BrowserRouter>
        )
        let select1 = container.getByTestId('select1')
        let select2 = container.getByTestId('select2')
        expect(container).toBeTruthy

        expect(select1).toBeTruthy
        expect(select2).toBeTruthy

        select1.value='Пулково (LED)'
        expect(select2.children.length < select1.children.length)

        select1.value=''
        expect(select1.children.length == select2.children.length)
        
    })
})
