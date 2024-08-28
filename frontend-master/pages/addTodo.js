import React, { useState } from 'react';
import Header from "../components/header";
import axios from 'axios';

function AddTodo() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isComplete, setIsComplete] = useState(false); // Estado para rastrear se a tarefa está completa ou não

  const addTodoHandler = () => {
    axios.post('http://localhost:8000/task/adicionar', {
      "_id": id,
      "name": name,
      "isComplete": isComplete, // Inclua o estado isComplete no objeto enviado
    })
      .then(response => {
        console.log("Task added successfully", response.data);
      })
      .catch(error => {
        console.error("Error adding task:", error);
      });
  }

  const handleIsCompleteChange = (event) => {
    setIsComplete(event.target.value === 'complete');
  }

  return (
    <>
      <Header />
      <h2>Add Todo Page</h2>
      <h5>Add Your Task</h5>
      <span>
        <input onChange={event => setId(event.target.value)} placeholder='Id' />
        <input onChange={event => setName(event.target.value)} placeholder='Name' />
          <label>
            <input
              type="radio"
              name="isComplete"
              value="complete"
              checked={isComplete}
              onChange={handleIsCompleteChange}
            />
            Complete
          </label>
          <label>
            <input
              type="radio"
              name="isComplete"
              value="incomplete"
              checked={!isComplete}
              onChange={handleIsCompleteChange}
            />
            Incomplete
          </label>
        <button onClick={addTodoHandler}>Add Task</button>
      </span>
    </>
  );
}

export default AddTodo;
