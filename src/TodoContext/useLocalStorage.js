import React from 'react';

function useLocalSrorage(itemName, initialition){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    const [item, setItem] = React.useState(initialition)
    
    React.useEffect(() =>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialition));
            parsedItem = initialition
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          
          setItem(parsedItem);
          setLoading(false);
          
        } catch (error) {
          setError(error)
        }
        
      }, 1000)  
    })
    
    
    
    const saveItem = (newTodos) => {
      try{
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(itemName,stringifiedTodos);
        setItem(newTodos);
      }
      catch(error){
        setError(error)
      }
    }
  
    return [
      item,
      saveItem,
      loading,
      error
    ]
  
}

export  { useLocalSrorage };