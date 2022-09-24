import { useState } from 'react'
import './App.css'

import { Container } from 'react-bootstrap';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const removeTodoItem = (id: string) => {
    setTodoList(todoList.filter(item => item.id !== id));
  }
  const toggleCompleteTodoItem = (id: string) => {
    setTodoList(todoList.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    }))
  }

  return (
    <div className="App">
      <Container>
        <h1 className='mt-4'>Todo App</h1>
        <TodoForm setTodoList={setTodoList}></TodoForm>
      </Container>
      <Container>
        <TodoList
          setTodoList={setTodoList}
          todoList={todoList}
          removeTodoItem={removeTodoItem}
          toggleCompleteTodoItem={toggleCompleteTodoItem}
        ></TodoList>
      </Container>
    </div>
  )
}

export default App
