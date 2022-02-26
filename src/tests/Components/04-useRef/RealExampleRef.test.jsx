import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../Components/04-useRef/RealExampleRef';
import { MultipleCustomHook } from '../../../Components/03-examples/MultipleCustomHook';


describe('Pruebas en <RealExampleRef />', () => {
    test('Debe mostrarse conrrectamente', () => {
        const wrapper= shallow( <RealExampleRef /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find ( 'MultipleCustomHook' ).exists() ).toBeFalsy;
    });

    test('Debe mostrar el componente <MultipleCustomHook />', () => {
        const wrapper= shallow( <MultipleCustomHook /> );
        wrapper.find( 'button' ).simulate( 'click' );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find ( 'MultipleCustomHook' ).exists() ).toBeFalsy;
    });
})