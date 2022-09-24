import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

import { Container, Form, InputGroup, Button, Table } from 'react-bootstrap';

interface todoItem {
  id: string
  title: string,
  completed: boolean,
};

function App() {
  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState<todoItem[]>([]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (value === '') {
      return;
    }
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string) => {
    const newTodo: todoItem = { id: uuidv4(), title: text, completed: false }
    setTodoList(todoList => [...todoList, newTodo]);
  };

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
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control value={value} onChange={e => setValue(e.target.value)} />
            <Button type='submit' variant='primary'>Add</Button>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            <>
              {todoList ?
                todoList.map((item) => {
                  return <tr key={item.id}>
                    <td className='text-start'>
                      {item.completed ?
                        <s>{item.title}</s>
                        :
                        <>{item.title}</>
                      }
                    </td>
                    <td className='text-end'>
                      <Button
                        variant={item.completed ? 'secondary' : 'success'}
                        className='me-2'
                        onClick={() => toggleCompleteTodoItem(item.id)}
                      >
                        {item.completed ? '完了' : '未完了'}
                      </Button>
                      <Button variant='danger' onClick={() => removeTodoItem(item.id)}>remove</Button>
                    </td>
                  </tr>
                }) :
                <p></p>
              }
            </>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default App
