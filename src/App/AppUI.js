import React from 'react';
import {TodoCounter} from '../TodoCounter/index.js';
import { TodoContext } from '../TodoContext/index.js';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButtom';
import {Modal}from '../Modal/index';
import {TodoForm} from '../TodoForm/index'

function AppUI(){  
   const value = React.useContext(TodoContext);
   const {
     error,
     loading,
     searchedTodos,
     completeTodo,
     deleteTodo,
     openModal,
     setOpenModal
   }= React.useContext(TodoContext);

    return(
      <div>
        <TodoCounter/>
        <TodoSearch/>  
        <TodoContext.Consumer>
          { ({ 
           error,
           loading,
           searchedTodos, 
           completeTodo, 
           deleteTodo })=> (
          <TodoList>
          {error && <p>estamos cargando </p>}
          {loading && <p>estamos cargando </p>}
          {(!loading && !searchedTodos.length) && <p className='add'> Añade un tema </p>}
        {searchedTodos.map(todo => (
               <TodoItem
                 key={todo.text}
                 text={todo.text}
                 completed={todo.completed}
                 onComplete={()=> completeTodo(todo.text)}
                 onDelete={()=> deleteTodo(todo.text)}
                 />   
          ))}
          <TodoItem/>
           </TodoList>
          )}
        </TodoContext.Consumer>
         {!!openModal&&(
           <Modal>
           <TodoForm/>
           </Modal>
         )}
   <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </div>
  
       

    );
    
}
export {AppUI};
       