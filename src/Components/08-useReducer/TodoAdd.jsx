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
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.boxAddTitle}>
          <input
            type="text"
            id="titleForm"
            name="description"
            placeholder=' '
            value={description}
            onChange={handleInputChange}
          />
          <label htmlFor="titleForm">Add Title</label>
        </div>
        <div className={styles.boxTextarea}>
          <textarea placeholder="hola verga"></textarea>
          <span>hola</span>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
