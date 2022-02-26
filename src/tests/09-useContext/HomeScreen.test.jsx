import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../Components/09-useContext/HomeScreen';
import { UserContext } from '../../Components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {
    const user= {
        name:'Carlos A.',
        email:'caoa@dev.com'
    }
    test('Debe mostrarse correctamente', () => {
        const wrapper = mount(
            <UserContext.Provider value={ {
                user
            } }>
                <HomeScreen />
            </UserContext.Provider>
        );
        expect(wrapper).toMatchSnapshot(`<HomeScreen />`);
    })
});