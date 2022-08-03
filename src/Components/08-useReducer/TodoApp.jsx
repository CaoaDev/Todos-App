import React, { useEffect, useReducer } from 'react'

// import components
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { handleAddTodo, handleDelete, handleToggle } from './constTodasReducer'

import '../08-useReducer/styles.css'
//import style module
import styles from './style/todoApp.module.css'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}
//     return[{
//         id: new Date().getTime(),
//         desc: '',
//         done: false
//     }];

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, {}, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // console.log( description );
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span>Agenda de Tareas</span>
        <span>{todos.length}</span>
      </h1>
      <div>
        <TodoAdd handleAddTodo={handleAddTodo} dispatch={dispatch} />

        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            dispatch={dispatch}
          />
        ) : (
          <p>No se encontró Información...</p>
        )}
      </div>
    </div>
  )
}
