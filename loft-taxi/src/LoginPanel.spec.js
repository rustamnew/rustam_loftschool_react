import React from 'react';
import {LoginPanel} from './LoginPanel'
import { fireEvent, getByTestId, getByText, render } from "@testing-library/react";


it('switch panel', () => {
    let wrapper = render(<LoginPanel />)
    let button = wrapper.getByTestId('switchButton')
    expect(button)
    fireEvent(button, new MouseEvent('click', {}))
    let registration = wrapper.getByText('Регистрация')
    expect(registration.innerHTML).toMatch('Регистрация')
})