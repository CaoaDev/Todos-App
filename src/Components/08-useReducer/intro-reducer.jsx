const intialState = [ {
    id: 1,
    todo: 'Despensa',
    done: false
}];

const newTodo = {
    id: 1,
    todo: 'Estudiar',
    done: false
};

// action no es nombre afuerzas puede ser cualquier cosa.
// ak se suman las dos const para poder usarlas en reducer
const todoReducer = ( state=intialState, action ) => {
    if ( action?.type === 'Agregar' ){
        return [ ...state, action.payload ]
    }
    return state;
}

let todos = todoReducer();

const action = {
    type: 'Agregar',
    payload: newTodo
};

todos = todoReducer ( todos, action );

// console.log( todos );