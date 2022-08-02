export const handleAddTodo = (dispatch, newTodo) => {
  dispatch({
    type: 'add',
    payload: newTodo
  })
}

export const handleDelete = (dispatch, todoId) => {
  dispatch({
    type: 'delete',
    payload: todoId
  })
}
export const handleToggle = (dispatch, todoId) => {
  dispatch({
    type: 'toggle',
    payload: todoId
  })
}
