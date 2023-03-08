import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancele = () => {
        setOpenModal(false)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="" 
            value={newTodoValue}
            onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button" 
                    onClick={onCancele}
                    className="TodoForm-button TodoForm-button--calcel"
                >
                    Concelar
                </button>
                <button 
                    className="TodoForm-button TodoForm-button--add"
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm };