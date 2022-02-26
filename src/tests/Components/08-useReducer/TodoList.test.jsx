import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../Components/08-useReducer/TodoList';
import { demoTodos } from '../fixture/demoTodos';

describe('PRuebas en <TodoList />', () => {
    const handleDelete= jest.fn();
    const handleToggle= jest.fn();
    const wrapper= shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );
    
    test('Debe mostrarse correctamente', () => {
            expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener dos <TodosListItem />', () => {
        expect( wrapper.find( 'TodosListItem' ).length ).toBe( demoTodos.length );
        // console.log(wrapper.find( 'TodosListItem' ).at(0).prop( 'handleDelete' ));
        expect( wrapper.find( 'TodosListItem' ).at(0).prop( 'handleDelete' ) ).toEqual( expect.any( Function ) );
    })
});