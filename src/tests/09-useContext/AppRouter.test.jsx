import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../Components/09-useContext/UserContext';
import { AppRouter } from '../../Components/09-useContext/AppRouter';


describe('Pruebs en <AppRouter />', () => {
    const user= {
        id: 1,
        name: 'Carlos ArturoDev'
    };
    const wrapper= mount(
        <UserContext.Provider value={ {
            user
        } }>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });
});