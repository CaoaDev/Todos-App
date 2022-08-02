import React from 'react'
import { TodosListItem } from '../../Components/08-useReducer/TodosListItem'

// imoprt style codule
import styles from './style/todoList.module.css'

export const TodoList = ({ todos, handleDelete, handleToggle, dispatch }) => {
  return (
    <section className={styles.section}>
      {todos.map((todo, index) => (
        <TodosListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          dispatch={dispatch}
        />
      ))}
    </section>
  )
}
