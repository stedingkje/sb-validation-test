import React from 'react'
import { render, screen } from '@testing-library/react'
import Cars from '../pages/cars'



describe('Cars', () => {
    test('id should match', () => {
        const obj = {
            id: '111',
            productName: 'Jest Handbook',
            url: 'https://jesthandbook.com'
        };
        expect(obj.id).toEqual('111');
    });
})

