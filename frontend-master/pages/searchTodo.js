import React, { useState } from 'react';
import Header from '../components/header';
import axios from 'axios';

function SearchTodo() {
  const [id, setId] = useState('');
  const [info, setInfo] = useState(null); // Estado para armazenar as informações da tarefa

  const searchTodoHandler = () => {
    axios.get(`http://localhost:8000/task/mostrar/${id}`)
      .then(response => {
        console.log("Task searched successfully", response.data);
        setInfo(response.data); // Atualize o estado 'info' com os dados da resposta
      })
      .catch(error => {
        console.error("Error while searching task:", error);
      });
  };

  return (
    <>
      <Header />
      <h2>Searching Todo Page</h2>
      <span>
        <input onChange={event => setId(event.target.value)} placeholder='Id' />
        <button onClick={searchTodoHandler}>Search Task</button>
      </span>
      {info && ( // Verifica se 'info' está definido antes de renderizá-lo
        <>
          <p>ID: {info._id}</p>
          <p>Nome: {info.name}</p>
          <p>Concluída: {info.completed ? 'Sim' : 'Não'}</p>
        </>
      )}
    </>
  );
}

export default SearchTodo;
