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
      <div className={styles.boxTitle}>
        <h1 className={styles.title}>
          Agenda de Tareas
          <span className={styles.titleSpanCount}>{todos.length}</span>
        </h1>
      </div>
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
