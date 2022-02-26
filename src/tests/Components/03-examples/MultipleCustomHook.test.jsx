import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHook } from '../../../Components/03-examples/MultipleCustomHook';
import { useFetch } from '../../../Hooks/useFetch';
import { useCounter } from '../../../Hooks/useCounter';
jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/useCounter');

describe('Pruebas en <MultipleCustomHook />', () => {

    useCounter.mockReturnValue({
        state: 10,
        increment: () => {}
    });

    
    test('debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should debe de mostrar la información', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHook /> );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Fernando' );

    })
    
    

})