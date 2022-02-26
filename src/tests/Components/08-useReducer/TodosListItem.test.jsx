import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodosListItem } from '../../../Components/08-useReducer/TodosListItem';
import { demoTodos } from '../fixture/demoTodos';


describe('Pruebas en <TodosListItem /> ', () => {
    const handleDelete= jest.fn();
    const handleToggle= jest.fn();
    const dispatch= jest.fn();
        const wrapper = shallow(
            <TodosListItem 
                todo={ demoTodos[0] }
                index={ 0 }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
                dispatch= { dispatch }
            />
        );
    
    test('Debe mostarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mandar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        handleDelete.mockImplementation((e) => {
            expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
        });
    });

    test('Debe mandar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        handleDelete.mockImplementation((e) => {
            expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
        });
    });

    test('Debe de mostrar el texto correctamente', () => {
    const p = wrapper.find( 'p' );
    expect( p.text().trim() ).toBe(`1. ${ demoTodos[0].desc }`)
    });

    test('Debe tener la clase completa si  el TODO.done= true', () => {
        const todo = demoTodos[0];
        todo.done =true;
        
        const wrapper = shallow(
            <todoListItem 
                todo={ todo }
            />
        );
        console.log(wrapper.html());
        expect(wrapper.find('p').hasClass('complete') ).toEqual(true);
    });
});