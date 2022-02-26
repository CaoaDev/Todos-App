import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../Components/08-useReducer/TodoAdd';

describe('Prueba en <TodoAdd />', () => { 
    const mockEvent = {
        preventDefault: jest.fn()
    };
    const handleAddTodo=jest.fn();
    const dispatch=jest.fn();
    
    const wrapper=shallow(
    <TodoAdd
    handleAddTodo={ handleAddTodo } 
    dispatch={ dispatch }
    />
    );
    
    test('Debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('No debe mandar el handleAddTodo', () => {
        const formSubmit= wrapper.find( 'form' ).prop( 'onSubmit' );
        formSubmit( { preventDefault () {} } );
        expect( handleAddTodo ).toHaveBeenCalledTimes( 0 );
    });

    test('Debe llamar la funcion handleAddTodo', () => {
        const value= 'Aprender React';
        wrapper.find( 'input' ).simulate( 'change', {
            target:{
                value,
                name: 'description'
            }
        } );
        const formSubmit= wrapper.find( 'form' ).prop( 'onSubmit' );
        formSubmit( { preventDefault() {} } );
        expect( handleAddTodo ).toHaveBeenCalledTimes( 1 );
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        expect( ( handleAddTodo ) ).toHaveBeenCalledWith({
            id: expect.any( Number ),
            des: value,
            done: false
        });
        expect( wrapper.find( 'input' ).prop( 'vale' ) ).toBe( '' );
    });
})