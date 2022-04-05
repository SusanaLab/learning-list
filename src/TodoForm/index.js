import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'
function TodoForm(){ 
    const  [newTodoValue, setNewTodoValue] =React.useState('');
    const {
    addTodo, 
    setOpenModal,
    }=React.useContext(TodoContext);

     const onChange=(event) => {
          setNewTodoValue(event.target.value);
     }
     const onCancel=(event) => {
       setOpenModal(false);
   }
     const onSubmit=(event) => {
         event.preventDefault();
addTodo(newTodoValue);
setOpenModal(false);
    }

    return (
      
<form onSubmit={onSubmit} >
      <label>Escribe un tema </label>
      <textarea
        value = {newTodoValue}
        onChange = {onChange}
        placeholder = "¿Que quieres aprender hoy?"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button-cancel"
          onClick = {onChange}
        >
          Cancelar
        </button>

        <button
          className="TodoForm-button TodoForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
    );
}
export {TodoForm};