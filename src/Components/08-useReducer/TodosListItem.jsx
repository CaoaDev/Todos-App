import React from 'react'

export const TodosListItem = ({
  todo,
  index,
  handleDelete,
  handleToggle,
  dispatch
}) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToggle(dispatch, todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="btn btn-outline-danger"
        onClick={() => handleDelete(dispatch, todo.id)}
      >
        Borrar
      </button>
    </li>
  )
}
