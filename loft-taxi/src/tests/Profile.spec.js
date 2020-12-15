import React from 'react'
import {Profile} from '../components/Profile';
import {render, queryByAttribute} from '@testing-library/react'

describe('About', ()=> {
    it('renders correctly', () => {
        const {container} = render(<Profile />)
        expect(container.innerHTML).toMatch('Профиль')
        expect(container.innerHTML).toMatch('Сохранить')

        
        const getById = queryByAttribute.bind(null, 'id');
        let name = getById(container, 'cardOwnerName')
        let number = getById(container, 'cardNumber' )
        let date = getById(container, 'cardDate')
        let cvc = getById(container, 'cardCVC')
        let submit = getById(container, 'submit')
        
        expect(name).toBeTruthy()
        expect(number).toBeTruthy()
        expect(date).toBeTruthy()
        expect(cvc).toBeTruthy()
        expect(submit).toBeTruthy()
    })
})