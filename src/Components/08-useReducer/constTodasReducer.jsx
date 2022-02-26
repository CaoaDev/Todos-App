export const handleAddTodo = ( dispatch, newTodo ) => {
    dispatch ( {
        type: 'add',
        payload: newTodo
    } );
};

export const handleDelete = ( dispatch, todoId ) => {
    dispatch ( {
        type: 'delete',
        payload: todoId
    } );
};
// se puede hacer de otra forma pero es mas larga para mi
     // const action = {
     //     type: 'delete',
     //     playload: todoId
     // } 
     // dispatch ( action );
    
export const handleToggle = ( dispatch, todoId ) => {
    dispatch ( {
        type: 'toggle',
        payload: todoId
    } );
};