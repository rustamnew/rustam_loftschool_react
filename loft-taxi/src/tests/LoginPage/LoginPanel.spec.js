import React from 'react';
import {LoginPanel} from '../../components/LoginPage/LoginPanel'
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";

import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store} from '../../store'


it('switch panel', () => {
    let wrapper = render(
        <BrowserRouter>
            <Provider store={store}>
                <LoginPanel/>
            </Provider>
        </BrowserRouter>
    )
    let button = wrapper.getByTestId('switchButton')
    expect(button)
    fireEvent(button, new MouseEvent('click', {}))
    let registration = wrapper.getByText('Регистрация')
    expect(registration.innerHTML).toMatch('Регистрация')
})