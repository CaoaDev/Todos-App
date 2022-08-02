import React from 'react'

// import style module
import styles from './style/todoListItem.module.css'
export const TodosListItem = ({
  todo,
  index,
  handleDelete,
  handleToggle,
  dispatch
}) => {
  return (
    <article key={todo.id} className={styles.boxList}>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(dispatch, todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <textarea
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(dispatch, todo.id)}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid
      </textarea>
      <button
        onClick={() => handleDelete(dispatch, todo.id)}
      >
        Borrar
      </button>
    </article>
  )
}
