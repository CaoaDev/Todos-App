import React from 'react';
import { useForm } from '../../Hooks/useForm';

export const TodoAdd = ( { handleAddTodo, dispatch } ) => {
    const [ { description }, handleInputChange, reset ] = useForm ( {
        description:''
    } );

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if ( description.trim().length <= 1){
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };
        handleAddTodo( dispatch, newTodo );
        reset();
    }
    return (
    <div className='form-input'>
        <h4> Agregar Tarea... </h4>
        <hr />
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                name='description'
                className='form-control'
                placeholder='Anotar...'
                autoComplete='off'
                value={ description }
                onChange={ handleInputChange }
            />
            <button 
                type='submit'
                className='btn btn-outline-primary mt-1 btn-block'
            > 
                Agregar
            </button>
        </form>
    </div>
    )
}