import React from 'react'
import {Profile} from './Profile';
import {render} from '@testing-library/react'

describe('About', ()=> {
    it('renders correctly', () => {
        const {container} = render(<Profile />)
        expect(container.innerHTML).toMatch('Profile')
    })
})