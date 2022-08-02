import React from 'react'
import { useForm } from '../../Hooks/useForm'

// import css module
import styles from './style/todoAdd.module.css'

export const TodoAdd = ({ handleAddTodo, dispatch }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length <= 1) {
      return
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }
    handleAddTodo(dispatch, newTodo)
    reset()
  }
  return (
    <div className={styles.container}>
      <h2> Add Todo </h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.boxAddTitle}>
          <label htmlFor="titleForm">Add Title:</label>
          <input
            id="titleForm"
            type="text"
            name="description"
            placeholder="Anotar..."
            autoComplete="off"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}
