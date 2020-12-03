import React from 'react';
import {fireEvent, getByText, render} from '@testing-library/react'
import { AuthProvider, AuthContext } from "./AuthContext";
import {Header} from "./header";

describe('Header', ()=>{
    it('корректный рендеринг', ()=>{
        const {container} = render(<Header/>)
        expect(container.innerHTML).toMatch('Выйти')
    })
})

