import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { handleAddTodo, handleDelete, handleToggle } from './constTodasReducer';

import '../08-useReducer/styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem( 'todos' ) ) || [];
}
//     return[{
//         id: new Date().getTime(),
//         desc: '',
//         done: false  
//     }];

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer( todoReducer, {} , init  );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) )
}, [ todos ]);
    
    // console.log( description );
return (
<div>
    <h1><center> Agenda de Tareas. ( { todos.length } )</center></h1>
    <hr />

    <div className='row'>

        <div className='col-7'/>
        {
            todos.length > 0
            ? 
            < TodoList 
                todos= { todos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
                dispatch={ dispatch }
            />
            :
            <p>No se encontró Información...</p>
        }

        <div className='col-5' />

        < TodoAdd
            handleAddTodo={ handleAddTodo }
            dispatch={ dispatch }
        />

        </div>
    </div>
    )
}