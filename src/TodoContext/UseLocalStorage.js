import React from "react";
function useLocalStorage (itemName, initialValue){ 
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=> {
      setTimeout(()=> {
         try{
            const localStorageItem =localStorage.getItem(itemName);
                  //esto le enviare a usestate
                  let parsedItem;
                  //si no tenemos nada en local storage 
                      if (!localStorageItem){
                            //set item añadirá estos al almacén, o actualizará el valor si la clave ya existe.
                            //Json stritify lo guarda y lo convierte a ese formato
                        localStorage.setItem(itemName, JSON.stringify(initialValue))
                        //al crear solo tengo un array vacio
                        parsedItem=initialValue;
                      }else{
                        //si tenemos info lo mando a mi json para que lo guarde 
                        parsedItem = JSON.parse(localStorageItem);
                      }  
                      setItem(parsedItem); 
                      setLoading(false);
         }
         catch(error){
              setError(error);
         }
       
          }, 1000 );
   }); 
    
     
  
    const saveItem =(newItem) => { 
    try{
   //le enviamos nuestro nuevo array de todos
      const stringifiedItem = JSON.stringify(newItem);
      //se actualiza la info del nuevo item 
      localStorage.setItem(itemName, stringifiedItem );
      setItem(newItem);
    }
    catch(error){
      setError(error);
    }
  };
  
  return{ 
    item, 
    saveItem,
    loading,
    error,
  };
  }
  export  { useLocalStorage };