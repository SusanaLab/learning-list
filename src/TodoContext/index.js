import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext= React.createContext();

function  TodoProvider(props){
    
  //buscamos nuestros todos
  const {
    //con los : renombro
    item:todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);
//filtramos los arrays completados 
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //mi cantidad de todos
  const totalTodos = todos.length;
//filtro de todos para cuando hago una busqueda
  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
//esta funcion recibe un array y nos ayuda a persistir info
const addTodo=(text)=> {
   const newTodos=[...todos];
    newTodos.push({
    completed:false,  
    text,
});
 saveTodos(newTodos);
  };

  const completeTodo=(text)=> {
    //buscar los todos que coinciden el texto anterior con el actual
    const todoIndex =todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=true;
    saveTodos(newTodos);
  };
  const deleteTodo=(text)=> {
    //buscar los todos que coinciden el texto anterior con el actual
    const todoIndex =todos.findIndex(todo => todo.text === text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
 
    return (
        
    //lo usamos para envolver todo la aplicacion
     <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
              setSearchValue,
              searchedTodos,
              deleteTodo,
              addTodo,
              completeTodo,
              openModal,
              setOpenModal,
     }}> 
      {props.children}
     </TodoContext.Provider>   
       
   
    );
}

export {TodoContext, TodoProvider};

/* 

//lo usamos cuando necesitemos algo de context
<TodoContext.Consumer></TodoContext.Consumer> */