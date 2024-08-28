import React, {useState} from 'react';
import Header from '../components/header';
import axios from 'axios'

function UpdateTodo(){
    const [id, setId] = useState('');
    const [name, setName] = useState('')
    const [info, setInfo] = useState(null);

    const updateTodoHandler = () => {
        axios.put(`http://localhost:8000/task/update/${id}`, {"name": name})
        .then(response => {
            console.log("Task updated successfully", response.data);
            // setInfo(response.data);
        })
        .catch(error => {
            console.error("Error while updating task:", error);
        });
    };

    return (
        <>
        <Header/>
        <h2>Updating Todo Page</h2>
        <span>
            <input onChange={event => setId(event.target.value)} placeholder='Id'/>
            <input onChange={event => setName(event.target.value)} placeholder='Name'/>
            <button onClick={updateTodoHandler}>Update Task</button>
        </span>
        </>
    )

}
export default UpdateTodo;