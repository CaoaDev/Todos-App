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
            placeholder=" "
            value={description}
            onChange={handleInputChange}
          />
          <label htmlFor="titleForm">Add Title</label>
        </div>
        <div className={styles.boxTextarea}>
          <textarea placeholder=" " />
          <span>Add Text</span>
        </div>
        <button type="submit" className={styles.buttonSubmit}>
          <span>Add</span>
          <span>(</span>
          <svg viewBox="0 0 448 512" className={styles.iconAdd}>
            <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
          </svg>
          <span>)</span>
        </button>
      </form>
    </div>
  )
}
