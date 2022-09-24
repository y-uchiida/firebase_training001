import { useState } from 'react'
import './App.css'

import { Container } from 'react-bootstrap';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoListContextProvider } from './contexts/TodoListContext';

function App() {

  return (
    <div className="App">
      <Container>
        <h1 className='mt-4'>Todo App</h1>
        <TodoListContextProvider>
          <TodoForm />
          <TodoList />
        </TodoListContextProvider>
      </Container>
    </div>
  )
}

export default App
