import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Form, InputGroup, Button } from 'react-bootstrap';

interface props {
	setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export const TodoForm = ({ setTodoList }: props) => {
	const [value, setValue] = useState('');

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault();
		if (value === '') {
			return;
		}
		addTodo(value);
		setValue('');
	};

	const addTodo = (text: string) => {
		const newTodo: TodoItem = { id: uuidv4(), title: text, completed: false }
		setTodoList(todoList => [...todoList, newTodo]);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup>
				<Form.Control value={value} onChange={e => setValue(e.target.value)} />
				<Button type='submit' variant='primary'>Add</Button>
			</InputGroup>
		</Form>
	)
}
