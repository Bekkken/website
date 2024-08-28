import React, { useState} from 'react';
import Header from '../components/header'
import axios from 'axios';

function DeleteTodo(){
    const [id, setId] = useState('') 

    const deleteTodoHandler = () => {
        axios.delete(`http://localhost:8000/task/delete/${id}`)
        .then(response => {
            console.log("Task deleted successfully", response.data);
            // Você pode fazer outras ações após a adição bem-sucedida, se necessário.
          })
          .catch(error => {
            console.error("Error while deleting task:", error);
            // Lida com erros de solicitação.
          });
    }

    return(
        <>
        <Header/>
        <h2>Deleting Todo Page</h2>
        <span>
        <input onChange={event => setId(event.target.value)} placeholder='Id'/> 
        <button onClick={deleteTodoHandler}>Add Task</button>
        </span>
        </>
    )




}

export default DeleteTodo;