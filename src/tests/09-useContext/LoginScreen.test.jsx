import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../Components/09-useContext/UserContext';
import { LoginScreen } from '../../Components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />', () => {
    const setUser= jest.fn();
    const wrapper=mount(
        <UserContext.Provider value={ {
            setUser
        } }>
            <LoginScreen />
        </UserContext.Provider>
    );

    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot('<LoginScreen />');
    });

    test('Debe ejecutarse el setUser con el segundo arumento esperado', () => {
        wrapper.find( 'button' ).prop( 'onClick' )();

        expect( setUser ).toHaveBeenCalledWith({
            id: 123,
            name: 'Carlos Art-Dev'
        });
    });
});