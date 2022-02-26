import React from 'react';
import { TodosListItem } from '../../Components/08-useReducer/TodosListItem'

export const TodoList= ( { todos, handleDelete, handleToggle, dispatch } ) => {
  return (
    <ul className='list-group list-group-flush' >
      {
      todos.map ( ( todo, index ) => (
        <TodosListItem 
          key={ todo.id }
          todo={ todo }
          index={ index }
          handleDelete={ handleDelete }
          handleToggle={ handleToggle }
          dispatch={ dispatch }
        />
      ))
      }
    </ul>
  )
}